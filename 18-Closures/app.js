(function() {

    function greet(typeOfGreeting) {

        return function(name) {
            console.log(typeOfGreeting + " " + name);
            // typeOfGreeting does not exist in this anonymous function expression.
            // So JS looks at the immediate outer environment.
            // Function 'greet' provides the typeOfGreeting variable.
        };

    }

    var sayHelloTo = greet("Hello");        // returns a function
    sayHelloTo('John');                     // Hello John

    var sayHiyaTo = greet("Hiya");          // returns a function
    sayHiyaTo('Jane');                      // Hiya Jane

})();


/*
 Closures allow functions inside other functions to have access to variables in the outer function.
 EVEN after the outer functions have completed running******

 This is why in the above example, our function sayHelloTo(); has access to the typeOfGreeting variable, even after the greet()
 function has returned the inner anonymous function and it's execution context has finished running.
 The sayHelloTo() execution context still contains a reference to its outer environment and because of closure, it will
 still find the typeOfGreeting variable there.

 In normal circumstances, the javascript engine will clean out the memory space of past execution contexts.
 */

console.log("------------------------------------");

function greet(type) {
return function(who) {
    console.log(type + " " + who);
};
}

var politeGreet = greet('Hello');
var blackGreet  = greet('Yo ma\' nigga');

// the inner function expression holds a reference to its outer environment (nothing new here)
// but it holds this reference even when the "greet's" execution context has finished.

politeGreet("Thanasis");
politeGreet("Angie");
blackGreet("Nigga");


console.log("------------------------------------");

// CLASSIC EXAMPLE ON CLOSURES
function buildFunctions() {
var arr = [];
for (var i = 0; i < 3; i++) {
    arr.push(function() {
        console.log(i);
    });
}

return arr;
}

// all elements of the array are functions
// call them
var functions = buildFunctions();
functions[0]();        // 3
functions[1]();        // 3
functions[2]();        // 3


// SOLUTION


function buildFunctions2() {
var arr = [];
for (var i = 0; i < 3; i++) {

    arr.push(
        // use an iffe to hold the current
        // outer environment
        (function(j) {
            // 3 new execution contexts are created
            // each has a different value for i (j)
            return function() {
                console.log(j);
            };
        })(i)
    );
}

return arr;
}

var functions2 = buildFunctions2();
functions2[0]();        // 0
functions2[1]();        // 1
functions2[2]();        // 2