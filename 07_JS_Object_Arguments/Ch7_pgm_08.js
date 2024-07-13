// Finding substrings

var message = "We choose to go to the Moon!";

console.log(message.substr(3, 12));



/* Further Adventures
 *
 * 1) Use substr to log the following parts of
 *    the message string to the console:
 *
 *    > Moon!
 *    > go to the
 *    > We choose
 *
 * 2) Investigate what happens if you omit the
 *    second argument when calling substr.
 *
 * 3) What happens if you use negative numbers
 *    as arguments?
 *
 */

var message = "We choose to go to the Moon!";

console.log(message.substr(20));     // Output: Moon!
console.log(message.substr(11, 6));  // Output: go to the
console.log(message.substr(0, 10));  // Output: We choose
