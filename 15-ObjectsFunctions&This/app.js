console.log(this);			// window object

function a() {
	console.log(this);		// window.object
}

var b = function() {
	console.log(this);		// window.object
};

a();
b();

/*
When i have 'this' inside of functions (either statements or expressions)
'this' refers to the global object.
*/

// ===================================================================
var myObj = {
	name: "Thanasis",
	greet: function() {
		console.log(this);		// 'this' now refers to this object, myObj

		// I can change its own properties
		this.name = "panos";		// mutate
		console.log(this);

		// BUT BUT BUT BUT BUT
		var setName = function() {
			console.log(this);		// CAUTION: 'this' again points to the global object
		}
		setName();

		// TO OVERCOME THIS ISSUE
		var self = this;
		var setName2 = function(newName) {
			// self is a variable that does not exist in this
			// function's execution context. So as stated previously
			// js will look for 'self' in the function's outer env.
			self.name = newName;
		}
 		setName2("Angie");
		console.log(self);
	}
}

myObj.greet();