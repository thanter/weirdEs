// Primitive types are passed around always by value.
// This means that the value is copied into a new memory location

var a = 3;
var b;

b = a; // new memory space
a = 4;

console.log(a);		// 4
console.log(b);		// 3

// But ALL objects (including functions) are passed around by reference
// This means the variables point to the same memory location

var obj1 = {
	greeting: "Hi"
};
var obj2;

obj2 = obj1; // By reference
obj1.greeting = "Hello";	// Mutate

console.log(obj1);		// Hello
console.log(obj2);		// Hello

// Same thing applies when passing objects as parameters
function changeGreeting(obj) {
	obj.greeting = "Hollllla";
}

changeGreeting(obj2);
console.log(obj1);		// Hollllla
console.log(obj2);		// Hollllla

// BUT be careful, when a new object is created
// JS assigns new memory space. Obj1 is changed but not the obj2.
obj1 = { greets: "Hello friend." };
console.log(obj1);		// Hello friend.
console.log(obj2);		// Hollllla