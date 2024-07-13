const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

const emptySet = new Set();

const set0to10 = new Set();
for (let i = 0; i <= 10; i++) {
    set0to10.add(i);
}
set0to10.delete(5);

emptySet.clear();

const countrySet = new Set(countries);

const countryLengthMap = new Map();
countries.forEach(country => {
    countryLengthMap.set(country, country.length);
});

console.log("Empty Set:", emptySet);
console.log("Set 0 to 10:", set0to10);
console.log("Country Set:", countrySet);
console.log("Country Length Map:", countryLengthMap);



// create an empty set
// Create a set containing 0 to 10 using loop
// Remove an element from a set
// Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a country