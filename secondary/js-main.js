
/*
var xyz = document.getElementsByClassName("abcd");
var xyz = xyz[0];
xyz.addEventListener("click", function alertBox() {alert('This is supposed to work like this.')}, false);
*/

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


	/*         var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);
        */