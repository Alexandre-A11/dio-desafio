const btnDarkMode = document.getElementById("mode-selector");
const body = document.getElementsByTagName("body")[0];
const h1 = document.getElementById("page-title");
const footer = document.getElementsByTagName("footer")[0];
const darkModeClass = "dark-mode";

const darkMode = () => {
    body.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    btnDarkMode.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    changeH1();
};

const changeH1 = () => {
    h1.textContent = h1.classList.contains(darkModeClass)
        ? "Light Mode OFF"
        : "Light Mode ON";
};

btnDarkMode.addEventListener("click", darkMode);
