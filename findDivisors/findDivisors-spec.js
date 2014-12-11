var chai = require('chai'),
	divisors = require('./findDivisors');

chai.should();

describe('dvisors', function () {
	it('should return number is prime for a number with no divisors.', function () {
		divisors(13).should.eql('13 is prime');
	});

	it('should return [5] for the number 25.', function () {
		divisors(25).should.eql([5]);
	});
});

