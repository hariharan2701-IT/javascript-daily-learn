var getHelloTo;
var fullMessage;

getHelloTo = function (name1, name2) {
    return "Hello to " + name1 + " and " + name2;
};

fullMessage = getHelloTo("Kandra", "Dax");

console.log(fullMessage);

// You can now call getHelloTo with two names from the console.
// For example, getHelloTo("Alice", "Bob") will return "Hello to Alice and Bob"
