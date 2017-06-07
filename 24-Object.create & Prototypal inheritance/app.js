var person = {
	firstname: "default",
	lastname: "default",
	getFullname: function() {
		return this.firstname + " " + this.lastname;
	}
}

// creating objects from an existing object
var john = Object.create(person);
console.log(john);				// empty object

/*
Object.create creates a new EMPTY object
BUT
its __proto__ property is the object which it was based on. (person)

SO WE CAN USE PROTOTYPAL INHERITANCE
*/

john.firstname = "John";
john.lastname = "Doe";
console.log(john.getFullname());
console.log(john);

// Object.create is supported only in new browsers
// But I can replicate its behaviour.

Object.create = function(o) {

	if (arguments.length > 1) {
		throw new Error("I accept only one paramter. The object which will be the __proto__");
	}

	function F() {}
	F.prototype = o;
	return new F();
}