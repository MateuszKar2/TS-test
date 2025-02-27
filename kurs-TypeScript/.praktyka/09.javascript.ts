

class Player {
    public readonly first: string;
    public readonly last: string;
    private scrore: number = 0;
    
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}

const elton = new Player("Elton","Steele");

//nie musimy TS podawać typu za każfym razem, TS jest w stanie domyślić się w wielu przypadkach jaki to typ

//modyfikator (do odczytu), istnieje tylko w TS -readonly
//elton.first = "elton" (błąd- właściwość jest tylko do odczytu)

//metody public i private, istnieją tylko w TS
//W TS każda właściwość jest uważana za publiczną- mam do tego dostęp po za klasą Player
//właściwość private (w JS #, jednak jest kilka różnic) pozwala na dostęp tylko w obrębie klasy Player

//mogę zastosować wersję skróconą zapisu
class Playerr {
    constructor(
        public first: string, 
        public last: string, 
        protected _score: number
    ) {}
//gettery i settery (to samo co w JS)
        get fullName(): string{
            return `${this.first} ${this.last}`;
        }

        get score(): number {
            return this._score;
        }

        set score(newScore: number) {
            if (newScore < 0){
                throw new Error ("Score cannot be negative");                
            }
            this._score = newScore;
        }
    }

    //trzecie słowo kluczowe to protected
    class SuperPlayer extends Playerr{
        public isAdmin: boolean = true;
        maxScore() {
            this._score = 9999999;
        }
    }
    //Protected właściwość jest dostepna tylko w klasach podrzędnych


    //interfejsy - interface
    interface Colorful {
        color: string;
    }

    class Bike implements Colorful {
        // color: "red"; (1) lub
        constructor(public color: string) {} //(2)
    }






    //absctract class - dostępne tylko w TS
    abstract class Cat {

    }
    //nie mogę tworzyć instancji ALE
    //mogę określić podstawowe rzeczy i przekazać ją klasom potomnym :)
    //można użyć słowa abstract aby oznaczyć metody jako wymgane/abstrakcyjne