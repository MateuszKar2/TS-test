//Typeof strażnik - tzw. zawężenie typów
//Analogia do Typeof(sprawdza się tylko z typami prymitywnymi)



//typ unii




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


//interfejsy



//instanceof

function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }
}