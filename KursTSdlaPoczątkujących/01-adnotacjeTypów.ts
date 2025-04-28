
//adnotacje pozwalają nam określić typ danych

const firstName: string = "John";

const numberFlowers: number = 15;

//adnotacje pozwalają już na wczesnym etapie kodu, poinformować że coś już nie gra

let isAdult: boolean = false;

//adnotacje to lepszy sposób na kontrolę typów danych w moim kodzie

type User = {
    name: string,
    age: number,
    woman: boolean,
};


const user: User = {
    name: "Even",
    age: 25,
    woman: false,
};