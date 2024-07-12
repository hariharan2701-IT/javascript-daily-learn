// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);
showSmaller(-10, 3);



/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */


//Trying Different Arguments
var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);   // Output: 3 is smaller than 12
showSmaller(-10, 3);  // Output: -10 is smaller than 3
showSmaller(5, 5);    // Output: 5 is smaller than 5 (equal case)


//Writing a showLarger Function
var showLarger = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(larger + " is larger than " + smaller);
};

showLarger(12, 3);   // Output: 12 is larger than 3
showLarger(-10, 3);  // Output: 3 is larger than -10
showLarger(5, 5);    // Output: 5 is larger than 5 (equal case)
