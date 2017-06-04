
// Example of an Immediately Invoked Function Expression
var greeting = function(name) {
	return "Hello " + name;
}('Thanasis');

// now greeting holds the value returned from the function
console.log(greeting); 	// Hello Thanasis


// INTERESTING ASIDE
// Inside of parenthesis i put only EXPRESSION, eg: (3+4)
// I cannot use statements eg: (if a > b)

// This is a valid function expression (INSIDE PARENTHESIS)
// Without assigning the function to a var
// I need to have the parenthesis, cause if they don't exist, js
// assumes I am typing a function STATEMENT (eg function test(){})
(function(name) {
	console.log(name)
})("Hello darkness my old friend");