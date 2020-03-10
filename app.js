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



var overlay = document.getElementById("overlay");

window.addEventListener('load', function () {
  function timeFunction() {
    setTimeout(function () {
      alert("");
    }, 4200);
  }
  overlay.style.display = 'none';
})
