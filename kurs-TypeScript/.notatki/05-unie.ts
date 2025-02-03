
//unie - za pomocą pionowej kreski mówię że zmienna może kilka typów


let myValue: string | number;

myValue = "John";
myValue = 24;
// myValue = true;//błąd





//unie z funkcją
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(`Value is a string ${value}`);
    } else {
        console.log("Valiu is a number");
    }
}
//printValue = false -błąd





//typy dosłowne
//1)
let state: "on" | "off";

state = "on";

state = "off";

//state = "for";//błąd




//2)
let score: 1 | 2 | 3;

score = 2;

score = 3;

//score = 4;//błąd