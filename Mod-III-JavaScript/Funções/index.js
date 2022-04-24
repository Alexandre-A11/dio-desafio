// Atividade 1
const approvedStudents = (arr, average) => {
    let approved = [];

    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];

        if (nota >= average) {
            approved.push(nome);
        }
    }
    return approved;
};

const alunos = [
    {
        nome: "João",
        nota: 5,
        turma: "1B",
    },
    {
        nome: "Sofia",
        nota: 9,
        turma: "1B",
    },
    {
        nome: "Paulo",
        nota: 6,
        turma: "2C",
    },
    {
        nome: "Miguel",
        nota: 3,
        turma: "2C",
    },
];

// console.log(approvedStudents(alunos, 5));

// Atividade 2
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const someFriends = [
    {
        nome: "Lucas",
        idade: 25,
    },
    {
        nome: "Italo",
        idade: 29,
    },
    {
        nome: "Karen",
        idade: 30,
    },
];

const pessoa = {
    nome: "Fernanda",
    idade: 27,
};

console.log(calculaIdade.call(someFriends[1], 3));
console.log(calculaIdade.apply(pessoa, [8]));
