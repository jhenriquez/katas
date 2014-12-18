var chai     = require('chai').should(),
	rgb = require('./rgb');

describe('rgb', function () {
	describe('Sample Cases', function () {
		it('should return FFFFFF for rgb(255,255,255)', function () {
			rgb(255,255,255).should.eql('FFFFFF');
		});
		it('should return FFFFFF for rgb(255,255,300)', function () {
			rgb(255,255,300).should.eql('FFFFFF');
		});
		it('should return 000000 for rgb(0,0,0)', function () {
			rgb(0,0,0).should.eql('000000');
		});
		it('should return 9400D3 for rgb(148,0,211)', function () {
			rgb(148,0,211).should.eql('9400D3');
		});
	});

	describe('Strange Cases', function () {
		it('should properly handle floating points', function () {
			rgb(0.1, 0.1, 0.1).should.eql('000000');
		});

		it('should handle small numbers.', function () {
			rgb(1, 1, 1).should.eql('010101');
		});

		it('should handle invalid input by throwing TypeError exceptions', function () {
			(function () { rgb(2,'ab', 'c'); }).should.throw(TypeError, /ab is invalid/);
		});
	});
});