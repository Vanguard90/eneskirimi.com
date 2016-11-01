
/*
var xyz = document.getElementsByClassName("abcd");
var xyz = xyz[0];
xyz.addEventListener("click", function alertBox() {alert('This is supposed to work like this.')}, false);
*/

var buttonClick = document.getElementsByClassName("abcd");
var i;
for (i = 0; i < buttonClick.length; i++) {
    buttonClick[i].addEventListener("click", function() {alert('This is supposed to work like this.')}, false);
}