const btn = document.querySelector(".btn");
const container = document.querySelector(".search");
const inp = document.querySelector(".input");

let clicked = false;
btn.addEventListener("click", function () {
  container.classList.toggle("active");
  inp.focus();
});
