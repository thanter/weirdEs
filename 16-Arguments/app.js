function greet(first, last, language) {

	// setting up a default value
	language = language || 'en';

	// the 'arguments' variable is a variable automatically created
	// by js for every function that is invoked (execution context)
	// 'arguments' contains an array-like collection that holds
	// all arguments passed to the function
	if (arguments.length === 0) {
		console.log("No parameters");
		console.log("--------------------");
		return;
	}

	console.log(arguments);
	console.log(first);
	console.log(last);
	console.log(language);
	console.log('---------------');
}

greet();
greet('thanasis');
greet('thanasis', 'nterelis');
greet('thanasis', 'nterelis', 'es');