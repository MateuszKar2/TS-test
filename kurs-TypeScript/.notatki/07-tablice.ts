let fruits: string[] = ['apple', 'orange', 'banana'];

console.log(fruits);







// let numbers: number[] = [1,2,3,4,5];

// console.log(numbers);


//mamy drugi sposób przypisywania dla tablic w TS


let numbers: Array<number> = [1,2,3,4,6];

console.log(numbers);

//jest to to samo, ale inaczej zapisane






//możemy potrzebować tablicy do przechowywania różnych typów, wtedy korzystamy z unii
let mixedArray:(string | number)[] = ["apple", 234, "45sd"];

let mixedArray2: Array<string | number> = ["apple", 234, "45sd"];// to samo, ale zapisane drugim sposobem







// typowanie el. w tablicy

type User = {
    name: string;
    age: number;
}
//tablica obiektów
//let users: Array<User> - to samo
let users: User[] = [   
    {name: "John", age: 23},
    {name: "Kate", age: 29},
];

users.push({
    name: "Witek",
    age: 28,
}); //muszę przekazać zarówno name jak i age, w innym wapdku będzie błąd np. jeżeli podam tylko name
//TS mówi nam że każdy el. tej tablicy musi składać się z dwóch właściwości name: string i age: number.
//Za pomocą tzw. inferencji typów nawet jeżeli nie zdefinuje typów i usunę ,,type User", TS domyśli się jakie typy powinno mieć name i age


console.log(users)










//tablice wielowymiarowe

let matrix: number[][] = [      //let matrix: Array<Array<number>> = []
    [1,2,3],//[0][1]
    [4,5,8],
    [2,9,8],
];

console.log(matrix[0][1])//2