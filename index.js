var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Engine started");
    };
    return Car;
}());
var myCar = new Car('BMW', 'X5', 2022);
myCar.start();
