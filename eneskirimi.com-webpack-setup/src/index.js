import style from "./scss/style.scss";

window.addEventListener("resize", function () {
  "use strict";
  window.location.reload();
});

document.addEventListener("DOMContentLoaded", yearSetter(), false);

/**
 * Dynamically update the years of experience in a crude way
 */
function yearSetter() {
  const startingYear = 2016 - 1; // Start counting from the start of 2016, simple trick
  const currentYear = new Date().getFullYear();

  const yearsAmount = document.querySelector("#years-amount");
  yearsAmount.textContent = currentYear - startingYear;
}
