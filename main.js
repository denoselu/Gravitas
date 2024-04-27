document.addEventListener("DOMContentLoaded", function () {
  const columns = document.querySelectorAll(".column");

  columns.forEach((column) => {
    column.addEventListener("mouseover", function () {
      column.style.transform = "scale(1.1)";
    });

    column.addEventListener("mouseout", function () {
      column.style.transform = "scale(1)";
    });
  });

  const packages = document.querySelectorAll(".package");

  packages.forEach((package) => {
    package.addEventListener("mouseover", function () {
      package.style.transform = "scale(1.05)";
    });

    package.addEventListener("mouseout", function () {
      package.style.transform = "scale(1)";
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const flipContainers = document.querySelectorAll(".flip-container");
  flipContainers.forEach((container) => {
    container.classList.add("hover");
  });
});

window.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".heroes-slide");
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  setInterval(nextSlide, 10000);
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000, // Change the delay between slides (in milliseconds)
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
