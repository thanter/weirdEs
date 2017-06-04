var person = {
	firstname: "Thanasis",
	lastname: "Nterelis",
	fullname: function() {
		return this.firstname + ' ' + this.lastname
	}
}

function greet(language) {
	// this is going to fail since 'this'
	// in the greeter's context points to the global object
	console.log("Hello " + this.fullname());
	console.log(language);
}

// greet();

// BUT if you want to change what 'this' refers to
// there are two ways
// 1.
var greetGood = greet.bind(person);
// bind: creates a NEW COPY of the function and now
// the 'this' keyword will refer to the person object
greetGood();
greetGood('en');

console.log('------------------------');

// 2.
// Using the 'call' method you can INVOKE the functions immediately
// without the need of a copy
greet.call(person, 'en');