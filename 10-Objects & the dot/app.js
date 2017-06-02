var person = new Object();
person['firstname'] = "John";
person['lastname'] = "Doe";

console.log(person);
console.log(person['firstname']);

person['address'] = new Object;
person['address']['street'] = "perdika";
person['address']['city'] = "Thessaloniki";

console.log(person);

/*
This is all good by the dot notation is always preferred.
BUT
The above method allows for DYNAMIC names of properties
eg:
var name = 'firstname';
person[name];
*/

console.log(person.firstname);
console.log(person.address.city);



// ====================================================
// USING OBJECT LITERALS

var me = {
	firstname: "Thanasis",
	lastname: "Nterelis",
	address: {
		street: "Perdika",
		city: "Thessaloniki"
	}
};
console.log(me);
// This is exactly the same thing as previously.

function greet(person){
	console.log("Hi " + person.firstname);
}

greet(me);
// passing object on the fly
greet({
	firstname: "Angie"
});