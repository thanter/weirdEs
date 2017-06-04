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