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

// *
// const input = document.getElementById("input") as HTMLInputElement;

// input.addEventListener("input", (e) => {
//     const i = e.currentTarget as HTMLInputElement;
//     console.log(i.value);
// });

// * Generic Types
// function adicionaApendiceALista<T>(array: any[], valor: T) {
//     return array.map((item) => item + valor);
// }

// adicionaApendiceALista(["1", "2", "3"], "1");

// // *
// interface IUsuario {
//     id: string;
//     email: string;
//     cargo?: "funcionario" | "gerente" | "coordernador" | "supervisor";
// }

// function redirecione(usuario: IUsuario) {
//     if (usuario.cargo) {
//         // redirecionar(usuario.cargo);
//     }

//     // redirecionar para a área do usuário.
// }

// *
// interface Cachorro {
//     nome: string;
//     idade: number;
//     parqueFavorito?: string;
// }

// type CachorroSomenteLeitura = {
//     +readonly [K in keyof Cachorro]-?: Cachorro[K];
// };
// class MeuCachorro implements Cachorro {
//     nome;
//     idade;

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const cao = new MeuCachorro("Apolo", 14);

// *
interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, "nacionalidade"> {}

const brasileiro: Brasileiro = {};
