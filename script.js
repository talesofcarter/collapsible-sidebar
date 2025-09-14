const toggleBtn = document.getElementById("toggle-menu");
const sidebar = document.querySelector(".sidebar");

function handleWindowResize() {
  if (window.innerWidth <= 768) {
    sidebar.classList.add("collapsed");
  } else {
    sidebar.classList.remove("collapsed");
  }
}

function toggleSidebar() {
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });
}

function btnActive() {
  const sidebarItems = document.querySelectorAll(".sidebar-item");

  sidebarItems.forEach((item) => {
    item.addEventListener("click", function () {
      console.log("clicked");
      sidebarItems.forEach((itm) => itm.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  btnActive();
  toggleSidebar();
  handleWindowResize();
});

window.addEventListener("resize", handleWindowResize);
