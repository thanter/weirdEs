// function constructor
function Person() {
	this.firstname = "John";
	this.lastname = "Doe";

	console.log(this);

	// the function should return nothing
}

function DynamicPerson(first, last) {
	this.firstname = first;
	this.lastname = last;
}

/*
When using the 'new' keyword with a function.
js will create a new object based on that function.
'this' will be referring to the current object
*/
var john = new Person();
console.log(john.firstname);


var thanasis = new DynamicPerson('Thanasis', 'Nterelis');
console.log(thanasis);

/*****   PROTOTYPE PROPERTY   ****/
// every function constructor has a special property called 'prototype'
// and through this property you can mutate (change) the __proto__ object
// for ALL the objects created from this constructor

Person.prototype.getFullname = function() {
	return this.firstname + " " + this.lastname;
}

console.log(john.getFullname());
// I have dynamically added a new method to the 'john' object
// this saves a lot of space.

// or
DynamicPerson.prototype.getFormalName = function() {
	return this.lastname + ", " + this.firstname;
}
console.log(thanasis.getFormalName());