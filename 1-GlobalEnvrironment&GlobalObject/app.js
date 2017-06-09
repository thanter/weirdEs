// When a JS program starts, Javascript creates an execution context.
// The Global execution context.
// Also JS creates a global object, which is assigned to the variable 'this'.

// In the browser the global object is called 'window'.
// (In nodejs it will be a different name)
// this === window

// In js when you create new variables and functions, outside of other functions,
// they get attached as 'attributes' and 'methods' to the global object
// eg. this.a or this.b() / window.a or window.b()

var a = 5;

function b() {

}

// CONSOLE
// check the 'this' object
// it will have the attributes 'a' and 'b'
// ** In global context there is no 'outer environment'