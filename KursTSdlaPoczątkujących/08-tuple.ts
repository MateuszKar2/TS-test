//tuple- 
//specjalny rodzaj tablic w TS, które mają z góry określoną ilość el. 
//o określonych typach na określonych pozycjach


let myTuple: [string, number];

myTuple = ["Hello", 23];
//w przypadku innych typów, innej kolejności lub wiekszej ilości el. -wystąpi błąd

console.log(myTuple[0])


//jednakże Tuple różnią się od tablic:
//1)tuple mają z góry określoną ilość el.
//2)kolejność typów
//3)dostęp do nie których metod tablicowych- nie które mogą zakłocić punkt 1 i 2 powodując błąd
