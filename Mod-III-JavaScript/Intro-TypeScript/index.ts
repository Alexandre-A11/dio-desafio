// // * types
// // type IAnimal = {
// //     nome: string;
// //     tipo: "terrestre" | "aquático";
// //     executarRugido(AlturaEmDecibeis: number): void;
// // };

// // * interfaces
// interface IAnimal {
//     nome: string;
//     tipo: "terrestre" | "aquático";
//     domestico: boolean;
// }

// interface IFelinos extends IAnimal {
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal {
//     porte: "pequeno" | "médio" | "grande";
// }

// type IDomestico = IFelinos | ICanino;

// const animal: IDomestico = {
//     domestico: true,
//     nome: "Cachorro",
//     porte: "médio",
//     tipo: "terrestre",
// };

const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (e) => {
    const i = e.currentTarget as HTMLInputElement;
    console.log(i.value);
});
