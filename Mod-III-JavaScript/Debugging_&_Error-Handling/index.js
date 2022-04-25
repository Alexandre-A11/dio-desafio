function validateArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if (typeof arr !== "object") throw new TypeError("Array precisa ser do tipo object"); // prettier-ignore

        if (typeof num !== "number") throw new TypeError("Array precisa ser do tipo number"); // prettier-ignore

        if (arr.length !== num) throw new RangeError("Tamanho inválido!");

        return arr;
    } catch (event) {
        if (event instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(event.message);
        } else if (event instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(event.message);
        } else if (event instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(event.message);
        } else {
            console.log("Tipo de erro não esperado: ", event);
        }
    }
}

// console.log(validateArray([1, 2, 3, 5], 5));
