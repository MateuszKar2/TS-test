const activeUsers: [] = [];

// activeUsers.push(2)
//nie możesz przypisać wartości do tablicy, ponieważ tablica jest typu - pusta tablica






//tablica np.stringów
const activeUsersSecund: string[] = ["sad", "fdsd", "hgjg"];






//tablica dwó lub nawet trzywymiarowa
const board: number[][] = [
    [4, 56],
    [78, 9],
]







const ages: [] = [];
const gameBoard: string[][] = []
type Product = {
    name: "string",
    price: number,
};
function getTotal(products: Product[]): number {
    let total = 0;
    for(let product of products){
        total += product.price;
    }
    return total;
}