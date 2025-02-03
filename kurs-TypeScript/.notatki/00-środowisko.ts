
//Code Runner- pozwala szyko uruchamiać kod, w różnych jezykach bez konfigurowania środowiska

//Prettify TypeScript: Better Type ...- sformatuje sposób pokazywania typów w TS

//Pretty TypeScript Errors - poprawia czytelność wyświetlania się błędów w TS

////////////////////////////////////////////

//tworzymy plik index.ts

//jak uruchmić plik

//1) kompilator TS - (w terminalu tsc .\index.ts) => kompilator utworzył nowy plik index.js
//taki który mógłby być umieszczony w przeglądarce, i przez nią wykonany :)
// terminal - node .\index.js - kod zostanie wyświetlony w terminalu

//2)Ts node ALE należy mieć skonfigurowanego TypeScripta - z ustawieniami domyślnymi nie działa
// terminal npx tsc --init (do konfiguracji TS)
// pojawi się nowy plik tsconfig.json
// terminal ts-node index.ts

//3)Narzędzie CodeRunner(wtyczka z góry) - ikonka play w prawym górnym rogu

////////////////////////////////////////////////

//konfiguracja transpilatora TypeScript

//ważne ustawienia:

//target- w jakiej wersji ma być wygenerowany ten plik

//module - system modułu, którego używamy

//rootDir - mówi komilatorowi TS, gdzie znajdują się pliki źródłowe naszego projektu
//zwykle ustawiamy "./src" => utworzenie folderu scr => przeciągniecie pliku .ts
//terminal tsc => wewnątrz src utowrzy plik z rozszerzeniem .js
//plik .js został wygenrowany z const i let a nie var- ponieważ target mówi że to jest nowsza wersja

//outDir - gdzie zapisywać skompilowane pliki .js
//tworzymy nowy folder np. dist i podajemy w outDir: /dist
//usówam plik .js => w konsoli wpisuje tsc => plik .js jest tworzony w folderze /dist :)

//removeComments - usuwa komentarze w pliku .js

//noEmitOnError - mówimy TS jeśli będzie błąd nie generuj tego w pliku .js :)
