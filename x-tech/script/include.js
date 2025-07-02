
document.addEventListener("DOMContentLoaded", function() {
  fetch("../navbar-footer/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    });

  fetch("../navbar-footer/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});

function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      const hamburger = document.getElementById("hamburger");
  
      navLinks.classList.toggle("active");
  

      if (navLinks.classList.contains("active")) {
        hamburger.innerHTML = "✖";
      } else {
        hamburger.innerHTML = "☰";
      }
    }









