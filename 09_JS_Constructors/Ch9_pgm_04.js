// A Planet constructor
/*
var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
    };
};

var planet = new Planet( "Jupiter", 5, "Gas Giant" );

planet.showPlanet();



/* Further Adventures
 *
 * 1) Use the Planet constructor function
 *    to create a second planet.
 *    Don't forget the 'new' keyword.
 *
 * 2) Call the showPlanet method on your
 *    newly created planet.
 *
 */

// Function to create a planet object with a method
var buildPlanet = function (name, position, type) {
    var planet = {};

    planet.name = name;
    planet.position = position;
    planet.type = type;

    planet.showPlanet = function () {
        var info = planet.name;
        info += ": planet " + planet.position;
        info += " - " + planet.type;
        console.log(info);
    };

    return planet;
};

// Array of constructed planet objects
var planets = [
    buildPlanet("Jupiter", 5, "Gas Giant"),
    buildPlanet("Neptune", 8, "Ice Giant"),
    buildPlanet("Mercury", 1, "Terrestrial")
];

// Function to display each planet's information with separation
var displayPlanets = function (planetsArray) {
    planetsArray.forEach(function (planet, index) {
        planet.showPlanet();
        if (index < planetsArray.length - 1) {
            console.log("---"); // Adding separator between planets
        }
    });
};
// Display all planets in the array
displayPlanets(planets);

// Further Adventures

// 1) Add two more planets to the planets array
planets.push(
    buildPlanet("Saturn", 6, "Gas Giant"),
    buildPlanet("Venus", 2, "Terrestrial")
);

// 2) Run the program to display them
console.log("\nAfter adding two more planets:");
displayPlanets(planets);
