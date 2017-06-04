function greetingsBuilder(language) {
	language = language || 'en';

	return function(firstname, lastname) {
		var greeting;

		if (language === 'en') {
			greeting = 'Hello ';
		}

		if (language === 'es') {
			greeting = 'Hola ';
		}

		console.log(greeting + firstname + " " + lastname);
	};

}


var defaultGreeter = greetingsBuilder();
var englishGreeter = greetingsBuilder('en');
var spanishGreeter = greetingsBuilder('es');

// Each time the 'factory' is called, a new execution cnotext is created
// When the function finishes, the last 'state' (value for 'language')
// is the outer environment of the inner function. (Closure)

defaultGreeter('Thanasis', 'Nterelis');
spanishGreeter('Thanasis', 'Nterelis');
englishGreeter('Thanasis', 'Nterelis');

//----------------------------------------------------------------------------
// CALLBACKS
// I have 2 functions, first and second
// I pass the second as argument to first. When first finishes all its work
// and and at the end it invokes the 'second'. The second is the callback function
// example

function first(second) {
	// second is a function (callback)

	// some work
	var a = 10;
	var b = 20;

	// callback
	second();
}

first(function() {
	console.log('ena eidon');
});

first(function() {
	console.log('dio eidon');
});