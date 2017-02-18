;(function() {

//Menu animation

	var hiddenX = document.querySelectorAll(".jsClick");
	var menu = document.querySelector(".menu");
	var nav = document.querySelector("#menu");
	var jsScroll = document.querySelectorAll(".jsScroll");

	var mainNav = document.querySelector(".main-nav-container");
	var sideMenu = document.querySelector(".side-menu");
	//
	var whoSection = document.querySelector("#who").getBoundingClientRect().top;
	console.log(whoSection);

	var scrollElem = document.documentElement.scrollTop || document.body.scrollTop;
	var scrollAll = window.pageYOffset + "px";

	//

	//
	// if(nav.offsetTop > 0) {
	// 	menu.style.opacity="0";
	// }

	menu.addEventListener("click", function(e) {
		e.preventDefault();
		menu.style.opacity="0";
		mainNav.style.top = "0";
		mainNav.style.position="fixed";
	}, false);

// function scrolling() {
// 	menu.style.top = window.pageYOffset + "px";
// 	if(menu.style.top === whoSection) {
// 		menu.style.background = "black";
// 		menu.style.textAlign = "center";
// 	}
// }
// window.addEventListener("scroll", scrolling, false);

function whoScroll(e) {
	if((document.documentElement.scrollTop || document.body.scrollTop) > whoSection) {
		// menu.style.background = "black";
		// menu.style.left = 0;
		menu.classList.add("scroll-menu");

	}else {
		menu.classList.remove("scroll-menu");
	}
}
window.addEventListener("scroll", whoScroll, false);

	// sideMenu.addEventListener("click", function() {
	// 	mainNav.style.top = sideMenu.style.top;
	// }, false);



	
// forEach don't work in IE 11
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

//Button scroll up
	// var upArrow = document.querySelector(".go-up");
	//
	// window.addEventListener("scroll", function() {
	//
	// 	if(scrollElem>=700) {
	// 		upArrow.classList.remove("hidden");
	// 	}else {
	// 		upArrow.classList.add("hidden");
	// 	}
	//
	// },false);
	//
	// function smoothScroll() {
	// 	if(scrollElem>0) {
	// 		window.scrollBy(0, -30);
	// 		setTimeout(smoothScroll, 0.1);
	// 	}
	// }
	//
	// upArrow.addEventListener("click",function(e) {
	//
	// 	e.stopPropagation();
	// 	smoothScroll();
	//
	// },false);

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
