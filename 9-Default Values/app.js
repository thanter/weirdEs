
function greet1(name) {
	console.log("Hello " + name);
}

console.log(greet1("Thanasis"));
// Hello Thanasis

console.log(greet1());
// Hello undefined
// JS doesn't care if you pass nothing, the parameters value is now 'undefined'

// What if i want to use a default value if nothing was passed?
function greet2(name) {
	name = name || "<Your name here>";
	console.log("Hello " + name);
}

console.log(greet2());
// Hello <Your name here>

/*
THE || operator has associativity from left to right.
If name is a FALSY value (null, undefined, "", 0 etc) it will result to false.
false || "<Your name here>"

The above operator does not return true or false, but it returns the first value that is actually true.
The string '<Your name here>' coerces to true so the operator returns '<Your name here>'.

in the end: name === "<Your name here>"
*/