//Typeof strażnik - tzw. zawężenie typów
//Analogia do Typeof(sprawdza się tylko z typami prymitywnymi)

//typ unii

//interfejsy

//instrukcje warunkowe np. if

const printLetters = (word?: string) => {
    if(word) {
        for (let char of word) {
            console.log(char);
        }
    } else {
        console.log("YOU DID NOT PASS IN A WORD!");
    }
};

//operator in
interface Movie {
    title: string;
    duration: number;
}

interface TVShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
    if("numEpisodes" in media){
       return media.numEpisodes * media.episodeDuration
    }
    media.duration;
}

//instanceof

function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }
}

//koncepcja predykatu

interface Cat {
    name: string;
    numLives: number;
}

interface Dog {
    name: string;
    breed: string;
}

                //funkcja pomocnicza
function isCat(animal: Cat | Dog): animal is Cat{ //to animal is cat mówi TS że jezeli jest true to cat
    return (animal as Cat).numLives !== undefined
}
                //zwróci true lub false

function makeNoise(animal: Cat | Dog): string {
    if(isCat(animal)){
        animal
        return "Meow"
    } else {
        animal
        return "How"
    }
}

//koncepcja dyskryminacji unii
//tworzenie różnych typów, które mają wspólną właśćiwość, która będzie dosłowną wartością
//do skomplikowanych rzeczy np. setki interfejsów

interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: "rooster";
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow";
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig";
}
 
type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal) {
    switch(animal.kind){
        case("pig"):
            return "Oink!";
        case("cow"):
            return "Mooo!";
        case("rooster"):
            return "Cockadoodledoo!";
    }
}

const stevie: Rooster = {
    name: "Steve Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));