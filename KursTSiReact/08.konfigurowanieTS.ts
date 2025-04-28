//TS Playground - do testowania dokumentacji i ustawień włącznie (tsconfig.json)

//tsconfig.json - są dostępne wszystkie ustawienia TS

//index.ts - napisany kod muszę skompilować do JS, aby został wyswietlony w przeglądarce
// tsc index.ts  - kompiluje pojedynczy plik
// tsc -w / wsc --watch - komiluje wszyskie pliki




//możemy w ustawieniach określić lokalizację, w której ma szykać TS
//lub które pliki ma ignorować



//nie wchodzą w skłąd kompilatora
//"files": określamy plik które chcemy aby TS zawierał, inne nie zostaną skompilowane
//"include": ["src"] pliki wewnątrz foldera src - zostaną skompilowane (foldery i pliki)
//"exclude": opcja przeciwstawna do include (foldery i pliki)

//"outDir": określamy folder (dist) do którego będą kompilowane pliki JS
//"target": moge określić wersję TS z którego korzystam
//"strict": mówi o ścisłym sprawdzaniu typów, dodaje lub wyłącza wiele opcji które się pod spodem

