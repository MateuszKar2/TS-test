//npx tsc -kompliacja dowolnego pliku z TS do JS
//tak ogólnie lub konkretny plik (którego nazwę podamy)








let hobbies: Array<string>;//ta zmienna będzie przechowywać tablicę stringów
hobbies = ["Sports", "Cooking", "Reading"];
// hobbies = [1 ,2, 3]//błąd

// let hobbies: string[]; -skrócony zapis










//łączenie type
// type Admin = {
//     permissions: string[]
// };

// type AppUser = {
//     userName: string;
// }

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//     permissions: ['login'],
//     userName: 'Max'
// }
//łączenie interfejsów
interface Admin {
    permissions: string[]
};

interface AppUser {
    userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
    permissions: ['login'],
    userName: 'Max'
}