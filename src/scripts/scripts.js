document.getElementById("button").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  var tags = document.getElementById("tags");
  var header = document.getElementById("header");

  if (this.innerHTML == "✕") {
    this.innerHTML = "☰";
  } else {
    this.innerHTML = "✕";
  }

  header.classList.toggle("header_bottom-margin");
  menu.classList.toggle("menu_invisible");
  tags.classList.toggle("tags_invisible");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 800) {
    var menu = document.getElementById("menu");
    var tags = document.getElementById("tags");
    var button = document.getElementById("button");
    var header = document.getElementById("header");

    if (!header.classList.contains("header_bottom-margin")) {
      header.classList.add("header_bottom-margin");
    }

    if (menu.classList.contains("menu_invisible")) {
      menu.classList.remove("menu_invisible");
      button.innerHTML = "✕";
    }

    if (tags.classList.contains("tags_invisible")) {
      tags.classList.remove("tags_invisible");
    }
  }
});

// summary
let articles = document.querySelectorAll("article");
if (articles.length > 1) {
  articles.forEach((article) => {
    let postElements = [...article.children];

    if (postElements.length > 3) {
      let details = document.createElement("details");
      let summary = document.createElement("summary");
      summary.innerHTML = "читать далее...";
      details.appendChild(summary);

      postElements.forEach((element, index) => {
        if (index > 1 && element.tagName !== "FOOTER") {
          details.appendChild(element);
        }
      });

      article.insertBefore(details, article.querySelector("footer"));
    }
  });
}
