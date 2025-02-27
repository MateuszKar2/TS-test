//pozwalają nam zdefiniować fn., klasy wielokrotnego użytku, które mogą pracować z wieloma typami

//za pomocą typu unii możemy definiować kilka typów, przy zwrocie również mamy taką możliowość
//generici działają podobnie, aczkolwiek umieszczamy je w nawiasach kątowych, ponadto z automatu zwracają typ określony w tych nawiasach

function numberIdentity(item:number): number{
    return item;
}

function stringIdentity(item:string): string{
    return item;
}

function booleanIdentity(item:boolean): boolean{
    return item;
}

//generics (typ może być jakkolwiek oznaczony np.T lub Type)
function identity<T>(item: T): T {
    return item
}









//nie ważne jakiego rodzaju typ dostarczę
//generici mówią nam dasz ten typ, a my zrócimy jedną z rzeczy tego samego typ 
function getRandomElement<T>(list: T[]): T{
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}   

console.log(getRandomElement<string>(["a", "b", "c"]));
getRandomElement<number>([4, 5, 213, 23, 678, 9]);











//Możemy również przekazywać więcej niż jeden typ genryczny np.
function merge<T, U>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2,
    };
}

const comboObj = merge({ name: "colt"}, { pets: ["blue", "elton"] });









//dlaczego nie używamy typu any? zamiast generics
//ponieważ generics dostarczają nam znacznie więcej informacji o typie zwracanym









//Możemy ograniczyć rodzaj typu danych jaki otrzymamy za pomocą słowa extends
function merges<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2,
    };
}

const comboObjs = merges({ name: "colt"}, { pets: ["blue", "elton"] });
//ogranicznenie że ten typ musi byc typu object