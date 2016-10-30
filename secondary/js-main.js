function alertBox () {

	alert("Clicked");
}

var xyz = document.getElementsByClassName("abcd");
var xyz = xyz[0];
xyz.addEventListener("click", function alertBox() {alert('This is supposed to work like this.')}, false);