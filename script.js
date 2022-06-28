const container = document.querySelector(".container");
const openBtn = document.getElementById("open");

openBtn.addEventListener("click", function () {
  container.classList.toggle("show-nav");
});
