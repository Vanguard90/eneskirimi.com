/* Button click start */

var buttonClick = document.getElementsByClassName("abcd");
var i;
for (i = 0; i < buttonClick.length; i++) {
    buttonClick[i].addEventListener("click", function clickFunction() {alert('This is supposed to go to an another page of this website.')}, false);
}

/* Button click end */

/* Header image rotation start */

var images = [], x = 0;
images[0] = "img/header/leaf1-thumbnail.jpg";
images[1] = "img/header/leaf2-thumbnail.jpg";
images[2] = "img/header/leaf3-thumbnail.jpg";

var alttext = [];
alttext[0] = "single-green-leaf";
alttext[1] = "double-green-leaf";
alttext[2] = "triple-green-leaf";

function nextimage() {

    var selectedImg = document.getElementById("logo-image");
    selectedImg.src = images[x];
    selectedImg.alt = alttext[x];
    x++;

    if(x >= images.length){
        x = 0;
    }
}

setInterval(nextimage, 3000);

/* Header image rotation end */

/* Mobile header area start */

var windowWidth = parseInt(window.innerWidth);

if (windowWidth > 700) {

let headerTag = document.getElementsByTagName("header")[0];
let hamburgerMenu = document.getElementsByClassName("mobile-hamburger")[0];

headerTag.removeChild(hamburgerMenu);

}


/* Mobile header area end */

/* No link click event start */

var buttonClick = document.getElementsByClassName("noLink");
var i;
for (i = 0; i < buttonClick.length; i++) {
    buttonClick[i].addEventListener("click", function clickFunction() {alert('This link is not the link you are looking for.')}, false);
}

/* No link click event end */

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