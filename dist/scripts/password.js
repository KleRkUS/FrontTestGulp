"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define("password",["exports"],t):t((e=e||self).password={})}(void 0,function(e){var t=function(){function t(e){_classCallCheck(this,t),this.password=e,this.status=!1}return _createClass(t,[{key:"activation",value:function(e){var t=e.value;t==this.password||5<=t.length?this.setStatus(!0):this.setStatus(!1)}},{key:"setStatus",value:function(e){this.status=e}},{key:"getStatus",value:function(){return this.status}}]),t}();e.Password=t,Object.defineProperty(e,"__esModule",{value:!0})});