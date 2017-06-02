/*
In js there are expressions and statements.
An expression is when a value is returned.
A statement is just a statement, eg an 'if'

There are function statements and function expressions
*/

// statement, this unit of code (3 lines) does not result in a value
function greet() {
	console.log("hello");
}

// expression, DON'T FORGET: FUNCTIONS ARE OBJECTS
var anonymousFunction = function() {
	console.log("heeey");
}
// During the creation phase of the execution context
// the above code results to the creation of an object
// (functions are objects).
anonymousFunc();

// FUNCTION EXPRESSIONS ARE NOT HOISTED,example:
anonymous2();
// RES
// undefined is not a function. This is not a function, it's just a variable for an object
var anonymous2 = function() {
	console.log('testing');
}


// ///////////////////////////////////////////////
 // Passing function as argument
function log(a) {
    a();
}

// Function expressions again
log(function() {
    console.log("I am a");
});
log(function() {
    console.log("I am b");
});
