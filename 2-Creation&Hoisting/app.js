// The Global execution context is created in two phases.
// 1. Creation phase
// 		-creates the global object
//		-reads my code and sets up the needed memory space
//       for variables (only a placeholder not the value) and functions (in their entirety).
//       THIS IS CALLED HOISTING. JS knows about my vars and functions.

b();
console.log(a);

var a = 10;					// like moving 'var a;' to the top, but NOT exactly

function b() {
	console.log("I am b");
}

// Results
// "I am b"
// undefined
// JS does not throw an error, cause it already knows about the existence of
// the variable a (but not its value) and the function b();

// BUT its a better practice to use it like this
// var a = 10;

// function b() {
// 	console.log("I am b");
// }

// b();
// console.log(a);
// USAGE AFTER DECLARATIONS



// 2 . Execution phase
// Where js actually runs my own code, line by line.

// JS IS single threaded and sychronous
// this means it runs my code line by line
// and only ONE thing executes at a time.


