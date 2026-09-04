document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".content h1, .content h2, .content h3, .content h4, .content h5, .content h6")
    .forEach(function (element) {
      var id = element.getAttribute("id");
      if (id) {
        var anchor = document.createElement("a");
        anchor.className = "header-link";
        anchor.href = "#" + id;
        anchor.innerHTML = '<span class="sr-only">Permalink</span><i class="fas fa-link"></i>';
        anchor.title = "Permalink";
        element.appendChild(anchor);
      }
    });
});
