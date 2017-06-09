;(function(global, $) {

	var Greetr = function(firstname, lastname, language) {
		return new Greetr.init(firstname, lastname, language);
	};

	var supportedLangs = ['en', 'es'];

	var greetings = {
		en: "Hello",
		es: "Holla"
	};

	var formalGreetings = {
		en: "Greetings,",
		es: "Saludos,"
	};

	Greetr.prototype = {

		getFullname: function() {
			return this.firstname + " " + this.lastname;
		},

		validate: function() {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid language";
			}
		},

		greeting: function() {
			return greetings[this.language] + " " + this.firstname;
		},

		formalGreeting: function() {
			return formalGreetings[this.language] + " " + this.getFullname();
		},

		greet: function(formal) {
			var msg;
			if (formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			if (console) {
				console.log(msg);
			}

			// chainability
			return this;
		},

		setLang: function(lang) {
			this.language = lang;
			this.validate();
			return this;
		}
	};


	/////////////////////////////////////////////
	// INIT
	////////////////////////////////////////////
	Greetr.init = function(firstname, lastname){
		var self = this;

		self.firstname = firstname || "";
		self.lastname  = lastname || "";
		self.language  = "en";
	};



	// For convenience only, i want to use 'Greetr.prototype'
	// to set methods instead of having to use 'Greetr.init.prototype'
	Greetr.init.prototype = Greetr.prototype;

	// Expose it to global context
	global.Greetr = global.G$ = Greetr;
}(window, jQuery))