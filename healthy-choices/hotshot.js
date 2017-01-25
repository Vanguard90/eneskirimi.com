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

const obese = document.querySelector(".obese");
const obeseBigger= document.querySelector(".obese-bigger");

function obeseCheck (obese) {
	if (document.body.clientHeight/document.documentElement.scrollTop > 3 && document.body.clientHeight/document.documentElement.scrollTop < 5) {
	if (obese.classList.contains("active") || obeseBigger.classList.contains("active")) {
		;
	} else {
		obese.classList.add("active");
		obeseBigger.classList.add("active");
	}
} else {
	obese.classList.remove("active");
	obeseBigger.classList.remove("active");
	}
}

setInterval("obeseCheck(obese)", 0500);

const clientHeight = document.body.clientHeight;
let scrolltop = document.documentElement.scrollTop;