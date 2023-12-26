const hamburgerBtn = document.querySelector(".hamburger");
const responsiveNavbar = document.querySelector(".responsive-navbar");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("resize", () => {
  if (window.innerWidth > 1485) {
    responsiveNavbar.style.display = "none";
  }
});

hamburgerBtn.addEventListener("click", () => {
  responsiveNavbar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  responsiveNavbar.style.display = "none";
});
