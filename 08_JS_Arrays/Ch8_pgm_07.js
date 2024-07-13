// Iterating over an array with forEach
/*
var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

items.forEach(showInfo);



/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */

// Iterating over an array with forEach
var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

// Add extra items to the array
items.push("The Taj Mahal");
items.push("Machu Picchu");
items[5] = "Eiffel Tower";

// Update the showInfo function
showInfo = function (itemToShow) {
    console.log(itemToShow + " (" + itemToShow.length + " letters)");
};

items.forEach(showInfo);
// Function to find the total number of letters in the items array
var totalLetters = function (arr) {
    var total = 0;
    arr.forEach(function (item) {
        total += item.length;
    });
    return total;
};

var total = totalLetters(items);
console.log("Total number of letters: " + total);
