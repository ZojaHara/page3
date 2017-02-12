;(function() {

//Menu animation

	var hiddenX = document.querySelectorAll(".jsClick");
	var menu = document.querySelector(".menu");
	var nav = document.querySelector("#menu");
	var mainNav = document.querySelector(".main-nav");

	if(nav.offsetTop > 0) {
		menu.style.opacity="0";
	}

	menu.addEventListener("click", function() {
		menu.style.opacity="0";
		mainNav.style.top = "0%";
	}, false);


var hideX = function() {
	menu.style.opacity="1";
	mainNav.style.top = "-200%";
};

for(var i=0; i<hiddenX.length; i++) {
	hiddenX[i].addEventListener("click", hideX, false);
}

//Button scroll up
	var upArrow = document.querySelector(".go-up");

	window.addEventListener("scroll", function() {

		var scrollUp = document.documentElement.scrollTop || document.body.scrollTop;

		if(scrollUp>=700) {
			upArrow.classList.remove("hidden");
		}else {
			upArrow.classList.add("hidden");
		}

	},false);

	function smoothScroll() {
		var scrollUp = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollUp>0) {
			window.scrollBy(0, -30);
			setTimeout(smoothScroll, 0.1);
		}
	}

	upArrow.addEventListener("click",function(e) {

		e.stopPropagation();
		smoothScroll();

	},false);

//Form validation

var form = document.querySelector("#form");

form.addEventListener("submit",function(e){

	var fields = document.querySelectorAll(".form-field"),
		errorMessage = document.querySelector(".error-message"),
		thanksMessage = document.querySelector(".thanks-message"),
		errors = [];

	e.preventDefault();

	for(var i=0; i<fields.length; i++) {

		var field = fields[i];

		if(field.type==="text" && field.value===""){
				errors.push(field);
			} else if(field.type==="email" && field.value.indexOf("@") === -1) {
				errors.push(field);
			} else if(field.type==="textarea" && field.value.length<4) {
				errors.push(field);
			}
		}

		if(errors.length) {
			errorMessage.classList.remove("hidden");
		} else {
			errorMessage.classList.add("hidden");
			thanksMessage.classList.remove("hidden");
			form.submit();
		}

},false);

mainNav.style.top = "-200%";



})();
