

interface Dog {
    name: string;
    bark(): void;
}


type Gog2 = {
    name: string;
    baek(): void;
}


//nie zawsze metody będą takie proste

//metody z argumentami i jaki typ ma zwracac dana metoda

interface Calculator {
    add(a: number, b: number): number;
}

let myCalculator: Calculator = {
    add(a, b) {
        return a + b;
    },
};

console.log(myCalculator.add(2, 3));


// type Calculator = {
//     add(a: number, b: number): number;
// }

// let myCalculator: Calculator = {
//     add(a, b) {
//         return a + b;
//     },
// };

// console.log(myCalculator.add(2, 3));