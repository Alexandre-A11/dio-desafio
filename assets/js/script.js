const h1 = document.querySelector("h1");
const spans = document.querySelectorAll("span");

const openDIO = () => {
    for (let i = 0; i < spans.length; i++) {
        if ((i + 1) % 2 === 0) {
            spans[i].style.letterSpacing = "0";
        }
    }
};

const closeDIO = () => {
    for (let i = 0; i < spans.length; i++) {
        if ((i + 1) % 2 === 0) {
            spans[i].style.letterSpacing = "";
        }
    }
};

setTimeout(() => {  openDIO(); }, 1000); // prettier-ignore
setTimeout(() => {  closeDIO(); }, 6000); // prettier-ignore
