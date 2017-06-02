var greet = "Hello";
var greet = "Hola";

console.log(greet);		// Hola
/*
One variable overwrites the other. Solution is the 
usage of namespaces. JS does not support namespaces
but it has objects:
*/

var english = {
	greet: "Hello"
};
var spanish = {
	greet: "Hola"
};
console.log(english.greet);

// BUT you cannot..
// console.log(english.greetings.greet);
/*
The dot operator has associativity from left to right:
english.greetings -> undefined
undefined.greeet
--> Cannot find property 'greet' of undefined.
*/

// ==================================================
// JS AND JSON
var mary = {
	name: "Mary",
	occupation: "programmer"
};
// this is a valid js object

/* json
{
	"name": "Mary",
	"occupation": "programmer"
}
// SAME SHIT, this is a valid json object
*/

var json = JSON.stringify(mary)
console.log("json string: " + json);

var jsonObj = JSON.parse('{"name": "Mary","occupation": "programmer"}');
console.log(jsonObj);



