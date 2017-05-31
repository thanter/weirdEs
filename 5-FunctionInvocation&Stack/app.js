function b() {

}

function a() {
	b();
}

a();

/*
Whenever is function is INVOKED (called) a new EXECUTION CONTEXT is created by js.
This new context follows the same two phases: Creation (hoisting etc) and Execution phase.

Every new Execution Context is put on top of an execution stack and only the current
context is actually ran at a single time.

Analytically:
1. Global execution context
- a is invoked
2. a's execution context created and executes code
- b is invoked
3. b' execution context created and code executed
4. Return back to a and finally back to global context.

*SINGLE THREADED & SYCHRONOUS*

*/

// eg

function b() {
	var myVar;
	console.log(myVar);
}

function a() {
	var myVar = 2;
	console.log(myVar);
	b();
}

var myVar = 1;
console.log(myVar);
a();

// 1
// 2
// undefined
// All myVar variables are completely different, they live in the execution
// context of each of their functions.