var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlhint = require("gulp-htmlhint");
var htmlmin = require('gulp-htmlmin');
var csso = require('gulp-csso');
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rollup = require('gulp-better-rollup');

gulp.task('sass', function()  {
	return gulp.src('app/styles/*.scss')
    	.pipe(sass())
    	.pipe(autoprefixer({
            cascade: false
        }))
        .pipe(csso())
    	.pipe(gulp.dest('dist/styles'))
});

gulp.task('html', function()  {
  return gulp.src('app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(htmlhint())
    .pipe(gulp.dest('dist'))
});

gulp.task('js', function() {
	return gulp.src('app/scripts/*.js')
        .pipe(rollup({plugins: [babel()]}, 'umd'))
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
		.pipe(uglify())
    	.pipe(gulp.dest('dist/scripts'))
});

gulp.task('watch', function() {
	gulp.watch('app/scripts/*.js', gulp.series('js'));
	gulp.watch('app/*.html', gulp.series('html'));
	gulp.watch('app/styles/*.scss', gulp.series('sass'));
});