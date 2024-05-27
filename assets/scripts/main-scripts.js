document.addEventListener("DOMContentLoaded", function () {
  var svgElement = document.querySelector(".ham");
  var menuOptions = document.querySelector(".menu-options");

  svgElement.addEventListener("click", function () {
    this.classList.toggle("active");
    menuOptions.style.display = this.classList.contains("active")
      ? "block"
      : "none";
  });

  // Listener for closing the menu when clicking outside
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
});
