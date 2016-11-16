/* Button click start */

var buttonClick = document.getElementsByClassName("abcd");
var i;
for (i = 0; i < buttonClick.length; i++) {
    buttonClick[i].addEventListener("click", function clickFunction() {alert('This is supposed to work like this.')}, false);
}

/* Button click end */

var windowWidth = parseInt(window.innerWidth);

 if (windowWidth <= 700) {

var mobileTeaser = document.getElementById("mobile-teaser");

var mobileTeaserImage = document.getElementById("mobile-teaser-image");
mobileTeaser.insertBefore(mobileTeaserImage, mobileTeaser.childNodes[0]);

}

/* setInterval(function, milliseconds) */

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