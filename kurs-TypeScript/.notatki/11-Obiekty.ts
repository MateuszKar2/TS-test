

let person: {
    name: string;
    age: number;
    greet:()=> void;
} = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

console.log(person.greet());






//typ object- można przypisać dowolny nie prymitywny typ, ale TS nie będzie wiedział jaki
let person2: Object = { name: "Alice", age: 30 }

//Object mówi TS że znajduje się object, jednak nic nie mówi jaka jest struktura tego objectu
//Lepszym sposobem niż object jest interfejs lub twz.typy- next lesson