//Typ bardzo podobny do any
//Różnicą jest zachowanie pewnej kontroli nad typami 


let value: unknown;

value = 25;
value = "hello";
value = false;

//TS nie zwraca błędu ALE...

// console.log(value.toUpperCase)//Błąd

//gdy chcę skorzystać z metody, TS mówi mi że nie mogę tego zrobić ponieważ nie mam pewności iż z motedy której korzystasz, stosujesz do stringa

//Aby bezpiecznie korzystać z unknown, muszę sprawdzić typ np. za pomocą warunku - if

if (typeof value === "string") { //Dobrze
    console.log(value.toUpperCase)
};





//Unknown z funkcją

function getRandomValue(): unknown {
    return Math.random() > 0.5 ? "TypeScript" : 2024;
}

let randomValue = getRandomValue();

if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase());
} else if (typeof randomValue === "number") {
    console.log(randomValue.toFixed(2));
}



//TS również nie zwraca uwagi na typ przypisany di :unknown,
//ale w przeciwieństwie do any...
//musimy sprawdzić czy typ jest prawidłowy przy wykonywaniu jakiejkolwiek operacji na zmiennej (np. warunek if)