// Creating arrays
/*
var scores;
var names;

scores = [ 3, 1, 8, 2 ];
names = [ "Kandra", "Dax", "Blinky" ];

console.log(scores);
console.log(names);
*/


/* Further Adventures
 *
 * 1) Add an extra element to each array.
 *
 * 2) Declare a third variable, akaScores.
 *
 * 3) Assign the scores array to akaScores.
 *    akaScores = scores
 *
 * 4) Log akaScores to the console.
 *
 */
// Creating arrays
var scores;
var names;

scores = [ 3, 1, 8, 2 ];
names = [ "Kandra", "Dax", "Blinky" ];

// Add an extra element to each array
scores.push(5); // Adding 5 to the scores array
names.push("Zara"); // Adding "Zara" to the names array

console.log(scores); // Output the scores array
console.log(names); // Output the names array

// Declare a third variable, akaScores
var akaScores;

// Assign the scores array to akaScores
akaScores = scores;

// Log akaScores to the console
console.log(akaScores); // Output the akaScores array
