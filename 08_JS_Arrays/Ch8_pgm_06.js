// Manipulating arrays with push, pop and join
/*
var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));



/* Further Adventures
 *
 * 1) Push another item onto the array.
 *
 * 2) Log the joined items.
 *
 * You can set an array element by using its index.
 * items[2] = "The Taj Mahal"
 *
 * 3) Set one of the items using square brackets.
 *
 * 4) Can you push more than one item at a time?
 *
 */

// Manipulating arrays with push, pop and join
var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));

// Push another item onto the array
items.push("The Taj Mahal");
console.log(items.join(" and ")); // Log the joined items

// Set one of the items using square brackets
items[1] = "Machu Picchu";

console.log(items.join(" and ")); // Log the joined items after setting a new value

// Push more than one item at a time
items.push("Eiffel Tower", "Great Wall of China");

console.log(items.join(" and ")); // Log the joined items after pushing multiple items
