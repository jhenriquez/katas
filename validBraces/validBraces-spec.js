var chai = require('chai'),
	validBraces = require('./validBraces');

chai.should();

describe('validBraces', function () {
	describe('examples', function () {
		it('should return true for "(){}[]"', function () {
			validBraces("(){}[]").should.be.ok();
		});
		it('should return false for "(}"', function () {
			validBraces("(}").should.not.be.ok();
		});
		it('should return false for "[(])"', function () {
			validBraces('[(])').should.not.be.ok();
		});
		it('should return true for "([{}])"', function () {
			validBraces('([{}])').should.be.ok();
		});
	});
	describe('special cases', function () {
		it('should return false for "(((({{"', function () {
			validBraces('(((({{').should.not.be.ok();
		});
	});
});