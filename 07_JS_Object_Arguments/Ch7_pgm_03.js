// A function to create planets

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;

buildPlanet = function (name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));



/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */





var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function (make, model, year, color) {
    return {
        make: make,
        model: model,
        year: year,
        color: color
    };
};

getCarInfo = function (car) {
    return car.year + " " + car.make + " " + car.model + ", " + car.color;
};

car1 = buildCar("Toyota", "Camry", 2022, "Silver");
car2 = buildCar("Tesla", "Model 3", 2023, "Red");

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));
