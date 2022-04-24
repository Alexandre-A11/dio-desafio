// Atividade 1
palindrome = (...arr) => {
    if (arr) {
        for (let i = 0; i < arr.length; i++) {
            const reversedString = arr[i].split("").reverse().join("");
            const isPalindrome = arr[i] !== reversedString ? `não ` : "";

            return `${arr[i]} ${isPalindrome}é um palíndromo!`;
        }
    }

    return "Defina pelo menos um valor.";
};

let array = ["raiar", "ovo"];
// console.log(palindrome());

// Atividade 2:
changeToZero = (arr) => {
    if (!arr || !arr.length){return -1} //prettier-ignore
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0 && arr[i] % 2 === 0) {
            console.log(`Substituindo ${arr[i]} para 0`);
            arr[i] = 0;
        }
    }
    return arr;
};

let arrayDois = [1, 3, 4, 6, 80, 33, 23, 90];

console.log(changeToZero(arrayDois));
