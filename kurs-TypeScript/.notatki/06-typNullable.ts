// typ nullable - to takie typy które mogą mieć standardowaą wartość np. number lub string, ALE
//mogą być też puste np. null lub undefind


let myText: string | null = "Hello";
//Mam do wyboru dwie wartości text albo brak wartości.


//Ten typ przydaje się bardzo często w formularza
//ponieważ
//mam pola, które mogą byc wypełnion, lub puste i wtedy przydaje się bardzo typ null





//function
function great(name: string | null) {
    if (name) {
        console.log(`Hello ${name}`);
    } else {
        console.log("Hello unknown");
    }
}


great("John");//Hello John

//dodatkowo w pliku konfiguracyjnym TS mam opcję ... strickNullChecks: 