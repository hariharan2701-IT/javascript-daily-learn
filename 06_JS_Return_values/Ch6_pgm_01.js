var getMessage;
var getMyMessage;
var response;

getMessage = function () {
    return "I’m going on an adventure!";
};

getMyMessage = function () {
    return "This is my custom message!";
};

response = getMessage();

console.log(response);

// Now you can call both functions from the console.
// getMessage() will return "I’m going on an adventure!"
// getMyMessage() will return "This is my custom message!"
