// Question 1: Creating a script with 2 variables, each assigned to a number.
var x = 5;
var y = 10;

console.log(x + 10);

// Creating a script with 2 variables, each assigned to a string.

var a = "Pickle"
var b = "Rick"

console.log(a + " " + b);

//Question 2: Creating a multidimentional array with names.
var simpsonNames = ["Bart", "Lisa", "Homer"];
var spongebobNames = ["Patrick", "Sandy", "Gary"];
var cartoonNames = [simpsonNames, spongebobNames];

//Outputting 2nd item from 1st array.
console.log(cartoonNames[0][1]);

//Outputting 3rd item from 2nd array.
console.log(cartoonNames[1][2]);

//Question 3: Declare variable.
var x = 99;

//Create if/else statement whether x is greater than or less than 100.

if (x < 100) {
	alert("Variable is less than 100");
} else {
	alert(x + " " + "is greater than 100");
}

//Question 4: Declare a function with a name.

function declareName(someName) {
	return console.log(someName);
}

//Invoke the function.
declareName("Greg");

//Question 5: