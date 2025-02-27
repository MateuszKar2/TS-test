

const coordinate:{x: number, y: number} = {
    x : 34,
    y: 456,
};





//gdy muszę określić typy x-razy, mogę skorzystać z tzw. aliasu

type Point = {
    x: number,
    y: number,
};

function doublePoint(point: Point): Point {
    return { 
        x: point.x * 2, y: point.y * 2,
    };
}; 




//aby uczynić jakąś właśćiwość opcjonalną- ?

type SecondPoint = {
    x: number,
    y: number,
    z?: number,
};




//słowo kluczowe, właściwość tylko do odczytu - readonly

type ThirdPoint = {
    readonly x: number,
    y: number,
    z: number,
};




// nie ma problemu z początkowym nadaniem wartości x, 
// ale nie można jej zmienić- mogę uzyskać tylko do niej dostęp
const userr: ThirdPoint = {
    x: 234,
    y: 25,
    z: 34576,
};
//  userr.y = 32;
// userr.x = 32234;






//połączenie kilku aliasów (type) &

type Circle = {
    radious: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radious: 4,
    color: "yellow",
};








type Film = {
    title: string;
    director?: string;
    releaseYear: number;
    boyOffice: {
        budget: number;
        grossUs: number;
        grossWorldwide: number;
    }
}


const movie = {
    title: "Avatar",
    director: "Cameron",
    releaseYear: 2011,
    boyOffice: {
        budget: 343239242,
        grossUs: 567659,
        grossWorldwide: 78983499,
    }
}


function getProfit(Movie: Film): number {
        const {grossWorldwide, budget} = movie.boyOffice;
        return grossWorldwide - budget
}