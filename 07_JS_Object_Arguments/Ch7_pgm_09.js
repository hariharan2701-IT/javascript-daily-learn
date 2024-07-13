// Finding a character with indexOf

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");

console.log(message.substr(charIndex, 3));



/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */

//Using indexOf to Find "go"
var message = "We choose to go to the Moon!";

var startIndex = message.indexOf("go");
console.log("Index of 'go':", startIndex);


//Using indexOf and substr to Display "choose"
var message = "We choose to go to the Moon!";

var moonIndex = message.lastIndexOf("oo");
console.log("Index of 'oo' in 'Moon':", moonIndex);
