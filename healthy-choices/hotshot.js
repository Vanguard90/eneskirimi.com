const html = document.querySelector("html");
const usTitle = document.querySelector(".h2-title");
const h2 = document.querySelector("h2");
const usa = document.querySelector(".usa");

function isScrolledIntoView(el) {
    var elemTop = el.getBoundingClientRect().top;
    var elemBottom = el.getBoundingClientRect().bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

function usTitleCheck(usTitle) {

	if (document.documentElement.scrollTop < 1000 && document.documentElement.scrollTop > 50) {
	if (usTitle.classList.contains("active") || usa.classList.contains("active")) {
		;
	} else {
		usTitle.classList.add("active");
		usa.classList.add("active");
	}
} else {
	usTitle.classList.remove("active");
	usa.classList.remove("active");
}

}

setInterval("usTitleCheck(usTitle)", 0500);