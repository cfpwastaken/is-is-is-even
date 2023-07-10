const isIsEven = require("is-is-even");
const isIsIsEven = require("./main.js");

if(isIsIsEven(isIsEven)) {
	console.log("Test 1 passed!");
} else {
	console.error("Test 1 failed!");
}

if(!(isIsIsEven(() => {}))) {
	console.log("Test 2 passed!");
} else {
	console.error("Test 2 failed!");
}
