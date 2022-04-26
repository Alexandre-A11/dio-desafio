const h1 = document.querySelector("h1");
const spans = document.querySelectorAll("h1 span");
const spanSpread = document.querySelectorAll(".spread-text span");
const imgSpread = document.querySelector(".spread-block img");

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

const openSpread = () => {
    spanSpread[1].style.letterSpacing = "0";
    spanSpread[2].style.letterSpacing = "0";
    setTimeout(() => { imgSpread.style.opacity = "1"; },2400); // prettier-ignore

    // Close Spread
    setTimeout(() => {
        spanSpread[1].style.letterSpacing = "";
        spanSpread[2].style.letterSpacing = "";
        imgSpread.style.opacity = "";
    }, 6000);
};
spanSpread[0].style.opacity = "0";
setTimeout(() => {  openDIO(); }, 1000); // prettier-ignore
setTimeout(() => {spanSpread[0].style.opacity = "1";}, 1000); // prettier-ignore
setTimeout(() => {  closeDIO(); }, 8000); // prettier-ignore
setTimeout(() => {  openSpread(); }, 1600); // prettier-ignore
