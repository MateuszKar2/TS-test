
//function
const doSomething = (a: number = 5, b:number): number | string => {
    if (a > 10) {
        return a / b
    }
    return `Przepraszam, ta liczba - ${a + b} jest zbyt mała`
};


console.log(doSomething(2, 12))



//never-nigdy nie powinniśmy zwracać wartości
//Funkcja nigdy nie przestaje być wykonywana
//:void vs :never                 ??????????

const twoFer = (person: string = "you"): string => {
    return `One for ${person}, one for me`
}

console.log(twoFer());
console.log(twoFer("Elvid"));

twoFer()






const isLeapyear = (year: number): boolean => {
     return(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
     };
console.log(isLeapyear(2012));
console.log(isLeapyear(2013));
