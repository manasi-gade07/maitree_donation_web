const openPanel = document.getElementById("openPanel");
const navLinks = document.getElementById("navLinks");

openPanel.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
