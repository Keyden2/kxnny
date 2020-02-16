const responsive = document.querySelector(".responsive");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
responsive.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(links => {
    links.classList.toggle("fade");
  });
});

navLinks.addEventListener("click", function() {
  responsive.click();
});
