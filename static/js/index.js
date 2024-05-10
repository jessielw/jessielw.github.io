const darkMode = document.getElementById("dark-mode");
const lightMode = document.getElementById("light-mode");

// original colors
const bodyColorOriginal =
  document.documentElement.style.getPropertyValue("--body-color");
const headerTextColorOriginal = document.documentElement.style.getPropertyValue(
  "--header-text-color"
);
const bodyTextColorOriginal =
  document.documentElement.style.getPropertyValue("--body-text-color");
const aTextColorOriginal =
  document.documentElement.style.getPropertyValue("--a-color");
const aTextColorHoveredOriginal =
  document.documentElement.style.getPropertyValue("--a-hovered");
const aTextColorVisitedOriginal =
  document.documentElement.style.getPropertyValue("--a-visited");

// dark mode colors
const bodyColor = "#403d39";
const headerTextColor = "#fffcf2";
const bodyTextColor = "#ccc5b9";
const aTextColor = "#eb5e28";
const aTextColorHovered = "#eb5e28";

darkMode.addEventListener("click", function () {
  setDarkMode();
  localStorage.setItem("darkMode", "enabled");
});

lightMode.addEventListener("click", function () {
  setLightMode();
  localStorage.setItem("darkMode", "disabled");
});

function setDarkMode() {
  document.documentElement.style.setProperty("--body-color", bodyColor);
  document.documentElement.style.setProperty(
    "--header-text-color",
    headerTextColor
  );
  document.documentElement.style.setProperty(
    "--body-text-color",
    bodyTextColor
  );
  document.documentElement.style.setProperty("--a-color", aTextColor);
  document.documentElement.style.setProperty("--a-hovered", aTextColorHovered);
  darkMode.style.display = "none";
  lightMode.style.display = "block";
}

function setLightMode() {
  document.documentElement.style.setProperty("--body-color", bodyColorOriginal);
  document.documentElement.style.setProperty(
    "--header-text-color",
    headerTextColorOriginal
  );
  document.documentElement.style.setProperty(
    "--body-text-color",
    bodyTextColorOriginal
  );
  document.documentElement.style.setProperty("--a-color", aTextColorOriginal);
  document.documentElement.style.setProperty(
    "--a-hovered",
    aTextColorHoveredOriginal
  );
  document.documentElement.style.setProperty(
    "--a-visited",
    aTextColorVisitedOriginal
  );
  lightMode.style.display = "none";
  darkMode.style.display = "block";
}

if (localStorage.getItem("darkMode") === "enabled") {
  setDarkMode();
}
