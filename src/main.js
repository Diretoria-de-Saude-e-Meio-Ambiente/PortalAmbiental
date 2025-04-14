console.log("Hello, world!");
const switchElement = document.getElementById("DarkModeSwitch");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-bs-theme", savedTheme);
switchElement.checked = savedTheme === "dark";

switchElement.addEventListener("change", () => {
  const newTheme = switchElement.checked ? "dark" : "light";
  html.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  console.log("Changed your theme to ", newTheme);
});
