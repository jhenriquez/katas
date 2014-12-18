var chai  = require('chai'),
	Event = require('./advancedEvents');

chai.should();

describe('Adavanced Events', function () {
  var event;
  beforeEach(function () {
  	event = new Event();
  });
  it('shoud have a subscribe method.', function () {
  	event.should.respondTo('subscribe');
  });
  it('shoud have an unsubscribe method.', function () {
  	event.should.respondTo('unsubscribe');
  });
  it('shoud have an emit method.', function () {
  	event.should.respondTo('emit');
  });
  it('emit must invoke all the handlers with the arguments provided', function (done) {
  	event.subscribe(function () {
  		Array.prototype.slice
  		.apply(arguments)
  		.should.be.a('Array').and.have.length(3).and.eql([1,2,3]);
  		done();
  	});
  	event.emit(1,2,3);
  });
  it('should execute handlers in the context of emit.', function (done) {
  	event.subscribe(function () {
  		this.subscribe(function () {
  			done();
  		});
  	});
  	event.emit();
  	event.emit();
  });
});