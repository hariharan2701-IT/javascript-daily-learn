// Converting a string to upper case

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);



/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */


//Creating a getBig Function
var getBig = function (str) {
    return str.toUpperCase();
};

// Testing getBig function
var planet = "Jupiter";
var bigPlanet = getBig(planet);
console.log(planet + " becomes " + bigPlanet);  // Output: Jupiter becomes JUPITER


//creating a getSmall Function
var getSmall = function (str) {
    return str.toLowerCase();
};

// Testing getSmall function
var country = "FRANCE";
var smallCountry = getSmall(country);
console.log(country + " becomes " + smallCountry);  // Output: FRANCE becomes france

