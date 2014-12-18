function Event () {
	var handlers = [];

	this.subscribe = function () {
		Array.prototype.slice.apply(arguments).map(function (argument) {
			handlers.push(argument);
		});	
	};

	this.unsubscribe = function () {
		Array.prototype.slice.apply(arguments).map(function (argument) {
			if (handlers.lastIndexOf(argument) !== -1) {
				handlers.splice(handlers.indexOf(argument),1);
				handlers = handlers.map(function (value) { return value; })
			}
		});	
	};

	this.emit = function () {
		var self = this;
		var selfArguments = Array.prototype.slice.apply(arguments);
		handlers.slice().map(function (handler) {
			if (typeof(handler) === 'function') {
				handler.apply(self, selfArguments);
			}
		});
	}
}

Event.prototype = Object.create(Event.prototype);
Event.constructor = Event;

module.exports = Event;
