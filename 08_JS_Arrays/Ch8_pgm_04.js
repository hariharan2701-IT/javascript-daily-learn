// Using a variable as an index
/*
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 4;

console.log( days[dayInWeek] );
console.log( days[dayInWeek - 1] );
*/


/* Further Adventures
 *
 * 1) Change the value of the dayInWeek variable
 *    to display a different day.
 *
 * 2) Write a function that accepts a number for the
 *    day of the week to be displayed and returns
 *    the day as a string. Assign the function to
 *    a getDay variable.
 *
 * 3) Call your function, passing it 4 as the day
 *    of the week, and log the value it returns.
 *
 */

// Using a variable as an index
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 2; // Changed the value to display a different day

console.log(days[dayInWeek]); // Output the day at index 2
console.log(days[dayInWeek - 1]); // Output the day before the one at index 2

// Write a function to get the day of the week
var getDay = function(dayNumber) {
    if (dayNumber >= 0 && dayNumber < days.length) {
        return days[dayNumber];
    } else {
        return "Invalid day number";
    }
};

// Call the function with 4 and log the value it returns
console.log(getDay(4)); // Output the day at index 4

// Additional call to demonstrate functionality
console.log(getDay(1)); // Output the day at index 1
console.log(getDay(5)); // Should output "Invalid day number" as 5 is out of range