let darkMode = localStorage.getItem("darkMode");
let icon = document.createElement("i")

function enableDarkMode() {
    let link=document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", "css/dark-mode.css");
  document.getElementsByTagName("head")[0].appendChild(link);
  icon.setAttribute("class", "far fa-moon")
  icon.setAttribute("id", "dark-mode-toggle")
  document.getElementById("dark-mode-toggle").appendChild(icon)
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  let link=document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", "css/main.css");
  document.getElementsByTagName("head")[0].appendChild(link);
  icon.setAttribute("class", "far fa-sun")
  icon.setAttribute("id", "dark-mode-toggle")
  document.getElementById("dark-mode-toggle").appendChild(icon)
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
  enableDarkMode();
} else {
    disableDarkMode()
}

const darkModeToggle = document.querySelector("#dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});