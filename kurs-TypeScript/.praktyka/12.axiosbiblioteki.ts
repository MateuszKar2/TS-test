//Zewnętrzne biblioteki typów


//1)pobieranie danych - axios
// import axios from "axios";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        goe: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};


// axios
// .get<User>("https://jsonplaceholder.typicode.com/users/1")
// .then((res) => {
//     console.log("WOOO!!!");
//     res.data.forEach(printUser);
// })
// .catch((e) => {
//     console.log("ERROR!", e);
// })
//dane będą typu User
//mogę zmienić to dowolnie

function printUser(user: User) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}

//axios ma plik z własnymi deklaracjami






//2)instalowanie bibliotek w TS
//Loadash- bardzo przydatna biblioteka
//instaluje "Loadash"
//biblioteka nie zawiera automatycznie typów TS
//ALE w 99% można je dodać w npm poprzez zadeklarowania 
//instaluje "@types/lodash"


//Przydatna może być również pakiet mapowania open-  Leaflet 