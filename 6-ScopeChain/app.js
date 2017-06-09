function b() {
	console.log(myVar);
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();

// RESULT
// 1
// HOW COME ?
/*
As stated previously when a new execution context is created it creates a 'link'
to its outer environment as well.
The outer enviroment is determined by WHERE
its function actually sits in the code.
So both a() and b() have the 'GLOBAL' as their outer enviroment.

When js CANNOT find the value for a specific variable (in this example myVar in b())
It will look for a value in its outer enviroment, this means the 'global' environment.
Thus the console log shows '1'
*/

function c() {
	function d() {
		console.log(myVar);
	}

	var myVar = 2;
	d();
}

var myVar = 15;
c();

// RESULT
// 2.
// Because now the outer environment of d is the function c
// there the value of myVar is 2.

// asside
// if i attempt to call the d() function for the global
// it will result to 'undefined function'
