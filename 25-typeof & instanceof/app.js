var a = 5;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = function() {
	return true;
}
console.log(typeof d);

var e = [];
console.log(typeof e);
// that is interesting, instead of using: e.toString()
// I can use the 'toString' on the Object object by passing the e as argument
console.log(Object.prototype.toString.call(e));

var Person = function() {
	this.name = 'default';
}
var p = new Person();
console.log(typeof p);
console.log(p instanceof Person);

console.log(typeof undefined);
console.log(typeof null);