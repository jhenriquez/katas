var chai = require('chai').should(),
	hexStringToRGB = require('./hexStringToRGB');

describe('Cases', function () {
	it('should return {r:255, g:153, b:51} for hexStringToRGB("#FF9933")', function () {
		hexStringToRGB('#FF9933').should.be.eql({r:255, g:153, b:51});
	});

	it('should handle shorthand syntax', function () {
		hexStringToRGB('#FFF').should.be.eql({r:15, g:15, b:15});
	});
});