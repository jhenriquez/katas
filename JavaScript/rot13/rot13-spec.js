var chai  = require('chai').should(),
	rot13 = require('./rot13');

describe('Cases', function () {
	it('should return "ROT13 example." for rot13("EBG13 rknzcyr.")', function () {
		rot13('EBG13 rknzcyr.').should.be.eql('ROT13 example.');
	});
	it('should return "Guvf vf zl svefg EBG13 rkprepvfr!" for rot13("This is my first ROT13 excercise!")', function () {
		rot13("This is my first ROT13 excercise!").should.be.eql('Guvf vf zl svefg EBG13 rkprepvfr!');
	});
});