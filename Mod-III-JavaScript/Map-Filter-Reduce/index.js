// Atividade 1 (Map with "this"):
const nums = [1, 2];

function mapWithThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const apple = {
    value: 2,
};

const orange = {
    value: 3,
};

// console.log("this === apple", mapWithThis(nums, apple));
// console.log("this === orange", mapWithThis(nums, orange));

// Atividade 1.2 (Map without this):
const nums2 = [2, 4, 6, 8, 10];

function mapWithoutThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

// console.log(mapWithoutThis(nums2));

// Atividade 2 (Filter):
const nums3 = [1, 23, 55, 67, 30, 2, 4];

function filterEven(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

// console.log(filterEven(nums3));

// Atividade 3 (Reduce):
const nums4 = [1, 2];
function sumNums(arr) {
    return arr.reduce(function (prev, current) {
        console.log({ prev }, { current }, "\nprev + current = ", prev + current); // prettier-ignore
        return prev + current;
    });
}

console.log(sumNums(nums4));

// Atividade 3.2 (Reduce):
const list = [
    {
        name: "Sabão em pó",
        price: 30,
    },
    {
        name: "Cereal",
        price: 12,
    },
    {
        name: "Toalha",
        price: 30,
    },
];

const balanceAvailable = 100;

function calcBalance(balanceAvailable, list) {
    return list.reduce(function (prev, current, index) {
        console.log("round ", index + 1, "\n", { prev }, { current });
        return prev - current.price;
    }, balanceAvailable);
}

// console.log(calcBalance(balanceAvailable, list));
