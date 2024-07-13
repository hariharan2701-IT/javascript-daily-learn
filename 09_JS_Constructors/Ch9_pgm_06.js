/*
var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.unshift(moon);
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");

var planet3 = new Planet("Mercury", 1, "Terrestrial");

[ planet1, planet2, planet3 ].forEach(function (planet) {
    planet.showPlanet();
});



/* Further Adventures
 *
 * 1) Add a new moon to each planet.
 *
 * 2) Create a showMoons method in the
 *    Planet constructor. It should
 *    show the moons with their index.
 *
 *    (0) Io
 *    (1) Europa
 *
 * 3) Update showPlanet to use showMoons
 *    rather than join for the moons.
 *
 * 4) Create a getMoon method that
 *    returns the moon at a given
 *    index.
 *
 *    > planet1.getMoon(1)
 *      Europa
 *
 */

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];

    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        this.showMoons(); // Updated to use showMoons method
    };

    this.addMoon = function (moon) {
        this.moons.unshift(moon);
    };

    // New method to show moons with index
    this.showMoons = function () {
        if (this.moons.length > 0) {
            console.log("Moons:");
            this.moons.forEach(function (moon, index) {
                console.log("(" + index + ") " + moon);
            });
        } else {
            console.log("No moons.");
        }
    };

    // New method to get moon by index
    this.getMoon = function (index) {
        if (index >= 0 && index < this.moons.length) {
            return this.moons[index];
        } else {
            return "Invalid index or no moon found.";
        }
    };
};

// Create planets and add moons
var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");
planet1.addMoon("Ganymede"); // Additional moon for planet1

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");
planet2.addMoon("Proteus"); // Additional moon for planet2

var planet3 = new Planet("Mercury", 1, "Terrestrial");
planet3.addMoon("Mercury Moon"); // Additional moon for planet3

// Display planets with updated moons
[planet1, planet2, planet3].forEach(function (planet) {
    planet.showPlanet();
    console.log(""); // Adding blank line for separation
});

// Test getMoon method
console.log("Getting moon at index 1 from planet1:");
console.log(planet1.getMoon(1)); // Should output "Europa"

