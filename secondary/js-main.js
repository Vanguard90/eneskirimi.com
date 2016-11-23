/* Button click start */

var buttonClick = document.getElementsByClassName("abcd");
var i;
for (i = 0; i < buttonClick.length; i++) {
    buttonClick[i].addEventListener("click", function clickFunction() {alert('This is supposed to go to an another page of this website.')}, false);
}

/* Button click end */

/* No link click event start */

var buttonClick = document.getElementsByClassName("noLink");
var i;
for (i = 0; i < buttonClick.length; i++) {
    buttonClick[i].addEventListener("click", function clickFunction() {alert('This link is not the link you are looking for.')}, false);
}

/* No link click event end */


/* Header hover area start */

var headerHover = document.getElementsByClassName("header-element");
var headerElement11 = document.getElementsByClassName("header-element-11");
var headerElement12 = document.getElementsByClassName("header-element-12");
var headerElement13 = document.getElementsByClassName("header-element-13");

headerHover[0].addEventListener("mouseover", function hoverFunction() { headerElement11.style.display = "block"; }, false);
headerHover[1].addEventListener("mouseover", function hoverFunction() { headerElement12.style.display = "block"; }, false);
headerHover[2].addEventListener("mouseover", function hoverFunction() { headerElement13.style.display = "block"; }, false);

/* Header hover area end */

/* Mobile optimization teaser area start */

var windowWidth = parseInt(window.innerWidth);

 if (windowWidth <= 700) {

var mobileTeaser = document.getElementById("mobile-teaser");

var mobileTeaserImage = document.getElementById("mobile-teaser-image");
mobileTeaser.insertBefore(mobileTeaserImage, mobileTeaser.childNodes[0]);

}

/* Mobile optimization teaser area end */

/* Popup js start */

setTimeout(modal, 3000);

var popup = document.getElementsByClassName("popup")[0];
var close = document.getElementsByClassName("close");
var header = document.getElementById("header");

function modal () {

popup.style.display = "block";

}

close[0].addEventListener("click", function clickFunction() {popup.style.display = "none";}, false);

/* Popup js end */


/* 

	setInterval(function, milliseconds)
	setTimeout(function, milliseconds)

 */
/*
function leaf1 () {

	var secondImage = document.getElementsByClassName("second-image");
	var headerDiv = document.getElementById("header-div");
	var thirdImage = document.getElementsByClassName("third-image");

	secondImage.remove();
	thirdImage.remove();

}

function leaf2 () {

	var firstImage = document.getElementsByClassName("first-image");
	var headerDiv = document.getElementById("header-div");
	var thirdImage = document.getElementsByClassName("third-image");

	headerDiv.removeChild(firstImage);
	headerDiv.removeChild(thirdImage);

}

function leaf3 () {

	var firstImage = document.getElementsByClassName("first-image");
	var headerDiv = document.getElementById("header-div");
	var thirdImage = document.getElementsByClassName("third-image");

	headerDiv.removeChild(firstImage);
	headerDiv.removeChild(secondImage);

}

setInterval(leaf1, 3000);
setInterval(leaf2, 6000);
setInterval(leaf3, 9000);

*/

 /*
let mouseover = document.getElementsByClassName("header-element");
for (i = 0; i < mouseover.length; i++ ) {
	mouseover[i].addEventListener("mouseover",function headerMouseOver() {alert ("Mouseover event!");}, false);
}


let mouseout = document.getElementsByClassName("header-element");
for (i = 0; i < mouseout.length; i++) {
	mouseout[i].addEventListener("mouseout", function headerMouseOut () {alert ("Mouseout event!");}, false);
}
*/

	/*         var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);
        */