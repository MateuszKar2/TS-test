
//są bardzo podobne do aliasów type

interface Point {
    x: number;
    y: number;
}

const pt: Point = {x: 123, y: 43563};









interface Person {
    readonly id: number;
     first: string;
     last: string;
     nickname?: string;
}
//właściwość opcjonalne - nickname(?)
//redonly- właściwość do odczytu
const thomas: Person = {first: "Thomas", last: "Hardy", id: 2343}
//nie mogę zmienić wartości id








interface PersonTwo {
    readonly id: number;
     first: string;
     last: string;
     nickname?: string;
     sayHi: () => string
}
//sayHi - jest to metoda która musi zwrócić string
//w sayHi mogę opisać wartość argumentów sayHi: (name: string) => ...










//Mogę dodać jeden interface do drugiego, nawet jeżeli jeden z nich jest w innym pliku lub nawet z biblioteki

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "As=ustralian Shepherd",
    bark(){
        return "Woof woof"
    },
};






//Mogę rozszerzyć interfejs za pomocą słowa exctends 
//(podobnie do programowania obiektowego- dziedziczę z klasy nadrzędnej)

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "quide dog";
}

const chevy: ServiceDog = {
    name: "Chevy",
    age: 4.5,
    breed: "Lab ",
    bark() {
        return "Barl!"
    },
    job: "quide dog"
}
//możemy rozszerzyć wiele interfejsów








interface Persons {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends Persons,Employee {
    level: string,
    languages: string[]
}


const pierre: Engineer = {
    name: "Pierre",
    id: 453254,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"],
};









//Types vs Interfaces

//1) Interfaces mogą opisywać tylko kształty obiektów, nie możemy ich używać do niczego innego
//Type - mogą opisywać dowolny typ np. funkcja, unie, ale też obiekty

//2)Types nie można rozszerzać vs Interfaces TAK!!!, za pomocą słowa kluczowego extends
//W type zamiast interface, możemy użyć - &