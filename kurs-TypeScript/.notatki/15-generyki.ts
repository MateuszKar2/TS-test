//genryki-
//uniwersalny kod, który będzie działał dla dowolnych typów
//ale jest zachowane bezpieczeństwo typów, dzięki sprawdzaniu ich przez TS


//generyki definiuje się za pomocą symboli, które są zmiennymi reprezentującymi typy
//najcześciej używamy litery T, ale można używać dowolnej nazwy lub litery


function identity<T>(value:T): T {  //T- reprezentuje dowolny typ danych
    return value;
} 

identity<number>(42); // T = number ( w tym przypadku)
identity<string>("Hello"); // T = string ( w tym przypadku)
//TS samodzielnie pilnuje typów






//generyki w funkcjach - często wykorzystywane



// function getFirstNumber(array: number[]): number {
//     return array[0];
// }
//funkcja tylko dla liczb- jest problem ponieważ nie działa np. dla stringów




function getFirstNumber<T>(array: T[]): T {
    return array[0];
}

let numbers = [1,2,3];
let strings = ["banana", "apple", "cherry"];

console.log(getFirstNumber(numbers))

//genryki rozwiązują problem







//Zaawansowane koncepcje
class Box<T> {
    private contents: T 

    constructor(value: T) {
        this.contents = value;
    }
    public getContents(): T{
        return this.contents;
    }
}

let numberBox = new Box<number>(123);//number
let numberBox2 = new Box<string>("abc");//string
console.log(numberBox.getContents())//123






//generyki bardziej ze złożonymi typami
//obiekty

type Product = { name: string; price: number };

let productBox = new Box<Product>({name: "Laptop", price: 1200 });
console.log(productBox.getContents());







//generyki z wieloma typami
//definiujemy więcej niż jeden generyk

function pair<A, B>(first: A, second: B): [A, B] {
    return [first, second];
}

let numberAndString = pair<number, string>(42, "Answer");
console.log(numberAndString);
//nie muszę pisać oddzielnnej funkcji
