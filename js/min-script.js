var link=document.querySelector(".btn-map"),popup=document.querySelector(".feedback-wrapper"),close=popup.querySelector(".btn-feedback-close"),name=popup.querySelector("[name=feedback-form-name]"),email=popup.querySelector("[name=feedback-form-email]"),form=popup.querySelector("form"),enterace=document.querySelector(".user-login-form"),login=enterace.querySelector("[name=email]"),password=enterace.querySelector("[name=password]");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),name.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){name.value&&email.value||(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),enterace.addEventListener("submit",function(e){login.value&&password.value||(e.preventDefault(),enterace.classList.remove("modal-error"),enterace.offsetWidth=enterace.offsetWidth,enterace.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});
