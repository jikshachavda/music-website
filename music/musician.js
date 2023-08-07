let menu = document.querySelector("#list-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = function () {
  menu.classList.toggle("bi-times");
  navbar.classList.toggle("active");
};
