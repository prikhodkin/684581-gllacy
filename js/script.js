var link = document.querySelector(".btn-map");
var popup = document.querySelector(".feedback-wrapper");
var close = popup.querySelector(".btn-feedback-close");
var name = popup.querySelector("[name=feedback-form-name]");
var email = popup.querySelector("[name=feedback-form-email]");
var form = popup.querySelector("form");
var enterace = document.querySelector(".user-login-form");
var login = enterace.querySelector("[name=email]");
var password = enterace.querySelector("[name=password]");
link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	name.focus();
});
close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(evt) {
	if (!name.value || !email.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}
});
enterace.addEventListener("submit", function(evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
		enterace.classList.remove("modal-error");
		enterace.offsetWidth = enterace.offsetWidth;
		enterace.classList.add("modal-error");
	}
});
window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});
