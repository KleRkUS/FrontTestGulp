import {Phone} from './phone.js';
import {Password} from './password.js';


// set default pass 
var defaultPassword = "12345";

window.onload = resizeFontSetter;
window.onresize = resizeFontSetter;

// set default font-size for EM-sizing
function resizeFontSetter() {
var screenWidth = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth, document.documentElement.clientWidth
);
var defaultScreenWidth = 1331;
document.getElementById('body').style.fontSize = screenWidth / defaultScreenWidth * 16 + "px";

}

// handling inputs
let phone = new Phone;
let pass = new Password(defaultPassword);
var inputPhone = document.getElementById('input__phone');
var inputPass = document.getElementById('input__password');

inputPhone.addEventListener("focus", function() {
	phone.activation(inputPhone)
	getStatus();
});
inputPhone.addEventListener("input", function() {
	phone.activation(inputPhone)
	getStatus();
});
inputPhone.addEventListener("blur", function() {
	phone.activation(inputPhone)
	getStatus();
});
inputPass.addEventListener("focus", function() {
	pass.activation(inputPass)
	getStatus();
});
inputPass.addEventListener("input", function() {
	pass.activation(inputPass)
	getStatus();
});
inputPass.addEventListener("blur", function() {
	pass.activation(inputPass)
	getStatus();
});

function getStatus() {
	var phoneStatus = phone.getStatus();
	var passStatus = pass.getStatus();
	if (phoneStatus & passStatus) {
		submit.style.cursor = "pointer";
		submit.disabled = false;
		submit.setAttribute("data-active", "true");
	} else {
		submit.style.cursor = "auto";
		submit.disabled = true;
		submit.removeAttribute("data-active");
	}
}