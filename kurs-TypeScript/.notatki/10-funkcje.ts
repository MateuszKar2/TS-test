
//Należy przpisać typ danych, i określić typ danych które będę zwracał
function greet(name: string): string {
    return `Hello ${name}!`;
}


let message = greet("John");
console.log(message)//Hello John!








//W TS należy dodawać adnotacje typów do parametrów
function add (a:number, b:number):number {
    return a +b
}

add(2, 4)//dobrze
// add(2, "hi")//błąd- hi nie jest number, i nie zwraca number









//parametry opcjonale i domyślne

//parametr opcjonalny

function greet2(name?: string): string {
    if (name) {
        return `Hello ${name}`;
    } else {
        return "Hello stranger";
    }
}

console.log(greet2())

//Nie wywoła błędu, mimo że nie podaliśmy argumentów, ponieważ dodaliśmy parametr opcjonalny
//za pomocą znaku ? - name?: string



//parametr domyślny

function greet3(name: string = "John"): string {
    if (name) {
        return `Hello ${name}`;
    } else {
        return "Hello stranger";
    }
}

console.log(greet3("Anna"))//Anna
console.log(greet3())//John







//typ void
//Mogę mieć funkcje która akceptuje więcej niż jeden typ 

function printId(id: number | string): void {
    console.log(`Your ID is ${id}`);
}

console.log(printId(2));//ok
console.log(printId("23"));//ok

//jeżeli funkcja nic nie zwraca (return) dodajemy typ : void









//typ never
//funkcja nigdy nie zwróci żadnej warości

function infiniteLoop(): never{
    while (true){
        //przykład
    }
}