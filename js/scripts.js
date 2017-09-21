;(function() {

	var hiddenX = document.querySelectorAll(".jsClick");
	var menu = document.querySelector(".menu");
	var menuHeight = menu.getBoundingClientRect().height;
	var nav = document.querySelector("#menu");
	var jsScroll = document.querySelectorAll(".jsScroll");

	var mainNav = document.querySelector(".main-nav-container");
	var sideMenu = document.querySelector(".side-menu");
	var whoSection = document.querySelector("#who").getBoundingClientRect().top;

//Menu animations

	menu.addEventListener("click", function(e) {
		e.preventDefault();
		menu.style.opacity="0";
		mainNav.style.top = "0";
		mainNav.style.position="fixed";
	}, false);


function whoScroll(e) {
	if((document.documentElement.scrollTop || document.body.scrollTop) > whoSection - menuHeight) {
		menu.classList.add("scroll-menu");
	}else {
		menu.classList.remove("scroll-menu");
	}
}
window.addEventListener("scroll", whoScroll, false);

// forEach de0sn't work in IE 11
	// jsScroll.forEach(function(elem) {
	// 	elem.addEventListener("click", function() {
	// 		mainNav.style.top = "-200%";
	// 		menu.style.opacity=1;
	// 	});
	// });

	function navHide() {
		mainNav.style.top = "-200%";
		menu.style.opacity=1;
	}

	for(var k=0; k<jsScroll.length;k++) {
		jsScroll[k].addEventListener("click", navHide, false);
	}


var hideX = function(e) {
	e.preventDefault();
	menu.style.opacity="1";
	mainNav.style.top = "-200%";
};

for(var i=0; i<hiddenX.length; i++) {
	hiddenX[i].addEventListener("click", hideX, false);
}

//Form validation

var form = document.querySelector("#form");

form.addEventListener("submit",function(e){

	var fields = document.querySelectorAll(".form-field"),
		errorMessage = document.querySelector(".error-message"),
		thanksMessage = document.querySelector(".thanks-message"),
		errors = [];
		emailCkeck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	e.preventDefault();

	for(var i=0; i<fields.length; i++) {

		var field = fields[i];

			if(field.type==="text" && (field.value==="" || field.value.length>30)){
				errors.push(field);
			} else if(field.type==="email" && !(emailCkeck.test(field.value)) ) {
				errors.push(field);
			} else if(field.type==="textarea" && (field.value.length<10 || field.value.length>1500)) {
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
