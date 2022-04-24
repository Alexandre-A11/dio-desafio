compare = (n1, n2) => {
    if (!n1 || !n2) { return console.log("Defina 2 números."); } //prettier-ignore
    const equals = n1 === n2 ? "são iguais" : "não são iguais";
    const sum = n1 + n2;
    let compare;
    if (sum === 10 || sum === 20) {
        compare = sum === 10 ? "igual a 10 e menor que 20" : "maior que 10 e igual a 20"; // prettier-ignore
    } else if (sum < 10) {
        compare = "menor que 10 e menor que 20";
    } else if (sum > 20) {
        compare = "maior que 10 e maior que 20";
    } else {
        compare = "maior que 10 e menor que 20";
    }

    console.log(`Os números ${n1} e ${n2} ${equals}. Sua soma é ${sum}, que é ${compare}.`); // prettier-ignore
};

compare();
