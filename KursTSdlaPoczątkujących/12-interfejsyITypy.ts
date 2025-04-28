

//Object będzie typowany w tym interfejscie
//Tutaj określe jakie będzie przyjmował typy

interface Person {
    name: string,
    age: number,
    greet(): void
}

let john: Person = {
    name:"john",
    age: 35,
    greet() {
        console.log(`Hello my name is ${this.name}`);
    },
};

john.greet();









//typy

type PersonType = {
    name: string;
    age: number;
    greet(): void;
};

const kate: PersonType = {
    name: "Kate",
    age: 20,
    greet() {
        console.log(`Hello my name is ${this.name}`)
    }
}

//tak samo jak interfejs, type będzie szablonem dzięki któremu możemy opisywać obiekty o takiej samej strukturze









//extends
//możemy użyć słowa kluczowego extends, aby rozszerzyć Interfejs

interface Person3 {
    name: string,
    age: number,
}

interface Employee extends Person3 {//Employee zawiera wszystko co było w Person3
    employeeId: number;
}

let worker3: Employee = {
    name: "Alice",
    age: 40,
    employeeId: 12,
};
//jest to mega przydatne
//poniwaz mogę rozszerzać np. podstawowy interfejs w zależności od swoich potrzeb










//łączy type 
//analogia do extends
//zamiast tego słowa używamy - &
//możemy połączyć różne type w jeden

type Person4 = {
    name: string,
    age: number,
}

type EmployeeType = Person4 & {//& zawiera wszystko co było w Person4
    employeeId: number;
}

let worker4: EmployeeType = {
    name: "Bob",
    age: 50,
    employeeId: 92,
};








//Różnice pomiędzy Interface a Type

//Interfejsy:
//struktura obiektu, chcę rozszerzać i dziedziczyc w określonej hierarchi

//types:
//bardzo elastyczne narzędzie dzieki którym mogę opisywać: unie, tuples, funkcje i inne el., które nie byłyby możliwe do opisania za pomocą interfejsu