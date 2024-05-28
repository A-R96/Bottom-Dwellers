document.addEventListener("DOMContentLoaded", function () {
  var svgElement = document.querySelector(".ham");
  var menuOptions = document.querySelector(".menu-options");
  var backToTopButton = document.getElementById("backToTopButton");

  svgElement.addEventListener("click", function () {
    this.classList.toggle("active");
    menuOptions.style.display = this.classList.contains("active")
      ? "block"
      : "none";
  });


  document.addEventListener("click", function (event) {
    if (
      !svgElement.contains(event.target) &&
      !menuOptions.contains(event.target)
    ) {
      svgElement.classList.remove("active");
      menuOptions.style.display = "none";
    }
  });

  var roadmapLink = document.getElementById("roadmap");
  roadmapLink.addEventListener("click", function (event) {
    event.preventDefault();
    var roadmapSection = document.querySelector(".roadmap");

    if (roadmapSection) {
      var top =
        roadmapSection.getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({ top: top, behavior: "smooth" });
    }
  });


  window.addEventListener("scroll", function () {
    if (window.scrollY > 600) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });


  backToTopButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
