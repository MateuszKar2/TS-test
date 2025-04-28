//tzw. wyliczenia
//zgrupowanie powiązanych wartości, pod jedna nazwą


 //enumy zaczynamy od dużych liter (tak samo jak klasy i interfejsy)
 //zmienne i funkcje zaczynamy od małej litery
 //1)
enum Direction {
    Up,         //0
    Down,       //1
    Left,       //2
    Right,      //3
}

let myDirection: Direction = Direction.Up;
console.log(myDirection);//o




//2)
//W poprzednim przykładzie TS automatycznie przypisywał liczby zaczynając od 0
//Tutaj są już przypisane ręcznie
enum Status {
    Success = 1,
    Failure = 2,
    Pending = 3,
}

let myStatus: Status = Status.Failure;

console.log(myStatus);//2
//jeżeli pominołbym wartości np. w Failure i Pending, to miałyby domyślnie 2 i 3
//ale gdybym dla success przypisał np. 832 to miałyby 833 i 834(cały czas zwiększa o 1)





enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}

let myColor: Color = Color.Green;

console.log(myColor); //GREEN