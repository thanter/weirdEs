(function() {

    var person = {
        firstName: 'Default',
        lastName: 'Default',
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        }
    };

    var john = {
        firstName: 'John',
        lastName: 'Doe'
    };

    // NEVER DO THIS
    john.__proto__ = person;


    printAllProperties(john);

    function printAllProperties(obj) {

        // forin returns not only this object's properties
        // but its prototype's as well
        for (var prop in obj) {
            // not its prototype's properties
            if (obj.hasOwnProperty(prop)) {
                console.log(prop + ": " + obj[prop]);
            }
        }
    }


    // Underscore's extend method. Merging properties of objects
    var obj1 = {
        kind: 'Dog',
        color: 'black'
    };

    var obj2 = {
        weight: 23,
        sayHello: function() {
            return "Woof";
        }
    };

    var dog = {};
    _.extend(dog, obj1, obj2);
    console.log(dog);
    console.log(dog.sayHello());

})();