var sayHello;

sayHello = function () {
    console.log("Hello\nWorld!");
};

// Calling the sayHello function three times
sayHello();
sayHello();
sayHello();

// New function to print letters of "Hello World!" one by one down the page
var printLetters;

printLetters = function () {
    var message = "Hello World!";
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
};

// Calling the printLetters function
printLetters();
