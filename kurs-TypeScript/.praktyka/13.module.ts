//przestrzeń nazw w TS

//współdzielenie kodu pomiędzy plikami 
//nie jest potrzebny (import-export), aby dzielić informacje pomiędzy modułami

//ponieważ
//każdy plik bez deklaracji (import-export)
//powinnien być traktowany jako skrypt, a nie moduł



//problem pojawia sie wtedy gdy np. nazwę zmienną lub funkcje tak samo
//po za tym muszę się upewnić że kod jest dołączany w poprawnej kolejności



//gdy dodam słowo export, wszystko się zmieni
//TS będzie zakładał że pracujemy z modułami
//Teraz muszę ręcznie eksportować i importować każdą funkcjonalność, której chcę użyć

//dodatkowo
//muszę dodać w ustawieniach składnię modułu ES
//ustawić działający serwer



//jeżeli będe miał plik tylko z typami danych np.interfejsami
//muszę pamiętać aby zaimportować
//import type { Person } from "./types.js";
//Person - interfejs
//kompilator tsc nie przekonwertuje tego pliku na js, jeżeli tego nie zrobię
