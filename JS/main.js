// Toggle Sidebar

const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger di klik muncul Side bar
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Ketika klik diluar hamburger maka sidebarnya hilang
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
