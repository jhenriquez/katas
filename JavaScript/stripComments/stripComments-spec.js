var chai = require('chai'),
	stripComments = require('./stripComments');

chai.should();

describe('solution', function () {
	describe('examples', function () {
		it('given "apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]', function () {
			stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
			.should.eql("apples, pears\ngrapes\nbananas");
		});
	});
});