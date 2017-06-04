(function() {

    var person = {
        firstname: 'Default',
        lastname: 'Default',
        getFullname: function() {
            return this.firstname + ' ' + this.lastname;
        }
    };

    console.log(person.getFullname());


    var john = {
        firstname: 'John',
        lastname: 'Doe'
    };

    // NEVER EVER NEVER ACCESS THE __proto__ property directly
    john.__proto__ = person;


    // Whichever object originated the call will be what is referenced to by 'this'.
    // So in the above instance, 'this' will point to the john object, not the person object.
    console.log(john.getFullname());    // John Doh

    /*
    If a method or property DOES NOT exist on an object, JS will look for this property at
    the object's __proto__ property
    eg. john object does not have a getFullname method but its '__proto__' property DOES
    have the getFullname, so it' called
     */

    var jane = {
        firstname: 'Jane'
    }
    jane.__proto__ = person;
    console.log(jane.getFullname());    // Jane Default (Default is set in the __proto__ object)
})();