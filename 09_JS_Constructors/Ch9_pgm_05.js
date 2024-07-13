// Including a moons array in our Planet constructor
/*
var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info +=  " - " + this.type;
        console.log(info);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.push(moon);
    };
};

var planet = new Planet( "Jupiter", 5, "Gas Giant" );

planet.addMoon("Io");
planet.addMoon("Europa");

planet.showPlanet();



/* Further Adventures
 *
 * 1) Create a second planet.
 *    Make one up if you like.
 *
 * 2) Add three moons to the second planet.
 *
 * 3) Call the showPlanet method
 *    on the second planet.
 *
 * 4) Add a removeMoon method
 *    that removes the last moon
 *    from the moons array.
 *
 */

// Constructor function for Planet with moons array
var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];

    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info += " - " + this.type;
        console.log(info);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };

    this.addMoon = function (moon) {
        this.moons.push(moon);
    };

    this.removeMoon = function () {
        if (this.moons.length > 0) {
            this.moons.pop();
        } else {
            console.log("No moons to remove.");
        }
    };
};

// Create the first planet (Jupiter) and add moons
var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");

// Display planet1 information including moons
planet1.showPlanet();

// Further Adventures
// 1) Create a second planet
var planet2 = new Planet("Earth", 3, "Terrestrial");

// 2) Add three moons to the second planet
planet2.addMoon("Luna");
planet2.addMoon("Phobos");
planet2.addMoon("Deimos");

// 3) Call the showPlanet method on the second planet
console.log("\nSecond Planet:");
planet2.showPlanet();

// 4) Add a removeMoon method that removes the last moon from the moons array
planet2.removeMoon();
console.log("\nAfter removing a moon:");
planet2.showPlanet();
