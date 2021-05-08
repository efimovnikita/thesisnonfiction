if (window.innerWidth > 800) {
  let nav = document.getElementById("main-navigation");
  nav.style.display = "flex";
}

document
  .getElementById("burger-button")
  .addEventListener("click", toggleButton);

window.addEventListener("resize", toggleMenu);

function toggleMenu() {
  if (window.innerWidth > 800) {
    let nav = document.getElementById("main-navigation");
    nav.style.display = "flex";
  }
}

function toggleButton() {
  let button = document.getElementById("burger-button");
  button.innerHTML = button.innerHTML === "✕" ? "☰" : "✕";

  let nav = document.getElementById("main-navigation");
  nav.style.display = nav.style.display === "none" ? "flex" : "none";
}
