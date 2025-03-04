
//1)instaluje webpack do konfiguracji mojego projektu w TS
//npm install --save-dev webpack webpack-cli typescript ts-loader


//2)Następnie konfigurujemy webpacka w oddzielnym pliku
//webpack kongiguracja.js- jest gotowy plik w dokumentacji


//3)usunąć .js rozszerzenia w plikacj podczas importu
// npm run build (wykonuje webpack) webpack tworzy plik bundle.js(nasz skompresowany projekt)
//który dodaje do index.html <script> zamiast index.js ;)


//4)npm start ... uruchamiam server => mam skonfigurowany webpack


//5)wyodrębniamy z tsconfig.json, i dodajemy do pliku z webpackiem: inline-source-map
//dzięki czemu wudzimy nasze pliki w consoli, nie tylko skompresowany plik bundle.js ;)


//6)#131 and #132 lessons 