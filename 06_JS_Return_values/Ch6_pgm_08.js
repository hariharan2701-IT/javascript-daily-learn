var getPlayerHealth;
var getPlayerPlace;
var showPlayerInfo;

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

showPlayerInfo = function (playerName, playerHealth, playerPlace) {
    console.log(getPlayerHealth(playerName, playerHealth));
    console.log(getPlayerPlace(playerName, playerPlace));
};

// Example calls
console.log(getPlayerHealth("Kandra", 50)); // Kandra has health 50
console.log(getPlayerPlace("Kandra", "The Dungeon of Doom")); // Kandra is in The Dungeon of Doom

// Call showPlayerInfo
showPlayerInfo("Dax", 50, "The Bath");
// Output:
// Dax has health 50
// Dax is in The Bath

showPlayerInfo("Kandra", 70, "The Castle");
// Output:
// Kandra has health 70
// Kandra is in The Castle
