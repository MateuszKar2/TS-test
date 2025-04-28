
//jeżeli zadaklaruje zmienną z typem any, mogę do niej przypisać dowolną wartość

//1)
let surname: any = "kowalski";

surname = 25;



//2)
//any z funkcją
let action: any = () => "runction called"

action = "It's not a function" 

// console.log(action());
//w obu przypadkach, w terminalu wyskoczy błąd, ale TS nie zgłasza błędu ponieważ użyłem typu any





//any z obiektami
let userData: any = {
    name: "John",
    age: 30
};

console.log(userData.name);

userData = "Text";

console.log(userData.name);//undefined




//Korzystając z any, tracę główną korzyść korzystania z TS
//Ponieważ TS w ogóle przestaje zwracać uwagę na typy