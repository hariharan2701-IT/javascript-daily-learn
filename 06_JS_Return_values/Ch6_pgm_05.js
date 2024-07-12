var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
    return callOutCharge + costPerHour * numberOfHours - discount;
};

// 1) Cost for 12 hours work
console.log("$" + totalCost(30, 40, 12, 0)); // This will display the cost for 12 hours

// 4) Total cost with a $20 off coupon for 3 hours
console.log("$" + totalCost(30, 40, 3, 20)); // This will display $130 for 3 hours
