//operator opcjonalnego dostępu- ?
//jest mega przydatny, gdy pracujemy z typami danych: null lub undefind



//daje  nam możliwość sprawdzenia, czy wartość przed operatorem nie jest null lub undefind
//a jeżeli jest, zwróci undefind zamiast wywołania błędu
//jest to taki skrót do instrukcji warunkowych, który zabezpiecza nas przed błędami ;)
//w obiektach, które moga być puste, lub częsciowo nie zidentyfikowane



let users:{name:string}[] | null = null;

// console.log(users.[0].name)//'users' is possibly 'null'.
// console.log(users?.[0])//zniknie błąd w konsoli dostanę undefind




//mamy jeszcze operator, dzięki któremu mówimwy TS że dana zmienna nie jest null ani undefind
//nawet jeżeli kompilator tego nie rozpoznaje

let element = document.querySelector("#myElement");

// element.classList.add("active");//'element' is possibly 'null'.
// element?.classList.add("active"); // dzięki operatorowi ?, mówimy TS że element nie jest nullem - nie wyrzuci błędu




//używanie tego wykrzyknika należy używać ostrożnie
//ponieważ zdejmuje zabezpieczenie, jakie uzyskuje za pomocą TS
