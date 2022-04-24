// Atividade 1:
function getADmins(map) {
    const admins = [];
    for ([key, value] of map) {
        if (value === "Admin") {
            admins.push(key);
        }
    }

    return admins;
}

const users = new Map();

users.set("Luiz", "Admin");
users.set("Stephany", "Admin");
users.set("Jorge", "User");
users.set("Natália", "Admin");

// console.log(getADmins(users));

// Atividade 2:
const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valueUnic(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valueUnic(array));
