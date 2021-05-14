document.getElementById("button").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  var tags = document.getElementById("tags");
  var header = document.getElementById("header");

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
articles.forEach((article) => {
  let paragraphs = article.querySelectorAll(["p", "blockquote"]);
  if (paragraphs.length > 1) {
    let details = document.createElement("details");
    let summary = document.createElement("summary");
    summary.innerHTML = "читать далее...";
    details.appendChild(summary);
    paragraphs.forEach((paragraph, index) => {
      if (index !== 0) {
        details.appendChild(paragraph);
      }
    });

    let footer = article.querySelector("footer");
    article.insertBefore(details, footer);
  }
});
