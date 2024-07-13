// Using the arguments passed by forEach
/*
var players;
var showArguments;

players = [ "Dax", "Jahver", "Kandra" ];

showArguments = function (item, index, wholeArray) {
  console.log("Item: " + item);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);


/* Further Adventures
 *
 * 1) Add two more names to the players array.
 *
 * 2) Run the program.
 *
 * 3) Change the first console.log so
 *    it uses wholeArray and index
 *    to display the current item in
 *    the array. Don't use the item
 *    parameter.
 *
 */

// Array of player names
var players = ["Dax", "Jahver", "Kandra"];

// Add two more names to the players array
players.push("Rina");
players.push("Zane");

// Function to display arguments passed by forEach
var showArguments = function (item, index, wholeArray) {
  console.log("Item: " + wholeArray[index]);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

// Iterate over players array and display arguments
players.forEach(showArguments);