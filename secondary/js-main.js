function addListener(event, obj, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(event, fn, false);   // modern browsers
    } else {
        obj.attachEvent("on"+event, fn);          // older versions of IE
    }
}

var element = document.getElementById('abcd');

addListener('click', element, function () {
    alert("Clicked");
});

alert("Loaded");