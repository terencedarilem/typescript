interface Vehicle {
    make: string,
    model: string,
    year: number,
    start: () => void 
}



class Car implements Vehicle {
    constructor (public make: string, public model: string, public year: number) { }

    start() : void {
        console.log("Engine started");
    }
}


const myCar = new Car('BMW', 'X5', 2022);

myCar.start();