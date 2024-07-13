const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

const unionAB = new Set([...a, ...b]);
const intersectionAB = a.filter(element => b.includes(element));
const aMinusB = a.filter(element => !b.includes(element));

console.log("Union of a and b:", unionAB);
console.log("Intersection of a and b:", intersectionAB);
console.log("Elements in a not in b:", aMinusB);


// Find a union b
// Find a intersection b
// Find a with b