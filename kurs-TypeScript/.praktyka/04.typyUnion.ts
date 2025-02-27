// 1)
let myAge: number | string = 54;
myAge = "fiften";






// 2)
type Points = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Points | Loc = {x: 1, y: 34}
coordinates = {lat: 23.435, long: 65.234}







// 3)
function calculateTax(price: number | string, tax: number){
    // return price * tax
    //musimy zawęrzyć typ" tzn. przekonać TS że można wykonać mnożenie, gdy przekażęmy do price number
    if (typeof price === "string"){
        price = price.replace("$", "")
    } else {
        price * tax
    }
}








// 4)
const stuffs: (number | string)[] = []//tablica number and string
const stuffYor: number | string[] = []//to lub to

const stuffMy: (number | string)[] = [1,2,3, "das"]
const stuffOur: number[] | string[] = [1,2,3] //to lub to ["das"]





//5)
//Typ dosłowny
const zero: 0 = 0;





//6)
//Bardzo przydatne jest łączenie typów dosłownych z typami Unii
let mood: "Happy" | "Sad" = "Happy";
// mood ="Angry"





let highScore: number | boolean;
const stuff: number[] | string[] = [];
type SkillLevel ="Beginner" | "Intermediate" | "Advanced" | "Expert" 
type SkiSchoolStudent = {
    name: string,
    age: number,
    sport: "ski" | "snowboard",
    level: SkillLevel,
}
type colorRGB = {
    r: number,
    g: number,
    b: number,
};

type colorHSL = {
    h: number,
    s: number,
    l: number,
}

const colors: (colorHSL | colorRGB)[] = []

function great(name: string | string[]): void {
    if(typeof name === "string"){
        console.log("Hello, ${name}")
    } else {
       for(let n of name){
        console.log(`Hello, ${n}`);
       }
    }
};