
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

  
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show button after scrolling down 200px
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  // Scroll to top when button is clicked
  scrollTopBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };






