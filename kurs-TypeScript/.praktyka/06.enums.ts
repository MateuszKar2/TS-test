//prosty zestaw nazwanych stałych, z przypisanymi indeksami zaczynającemi się od 0,
//lub od określonej liczby, wzrastającej +1
//Uzyskuje autouzupełnianie



enum OrderStatus {
    PENDING,
    SHIPPED, 
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED;
//Status musi być jedną z tych czterech opcji

function isDelivered(status: OrderStatus){
    return status = OrderStatus.DELIVERED
}





//mogę przypisać wartość zmiennej np. PENDING = 10, wszystkie inne automatycznie dostaną wartość o +1 większą
//mogę przypisać wartości wszystkim
//mogę nie przypisywać wartości, wtedy otrzymają ją automatycznie od 0







enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    ERROR = 234,
}
//mogę przypisywać nie tylko wartości liczbowe






//enumy w przeciwieństwie do innych el. TS, ma duży wpływ na JS
//kod kompilowany do JS jest znacznie bardziej rozbudowany

