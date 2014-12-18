var chai = require('chai').should(),
	tryCode = require('./tryCode');

function randomInt(max, min) {
	return Math.floor(Math.random() * (max - min)) + min;
}

describe('Case', function () {
	it('should resolve any number in a maximum of 10 calls', function () {
		var code = [randomInt(10,0),randomInt(10,0),randomInt(10,0)];
		var guess;
		var indications = undefined;
		for(var i = 0; i < 10; i++) {
			guess = tryCode(indications);
			indications = indications || [0,0,0];
			indications = indications.map(function (value, index) {
				return code[index] === guess[index] ? 0 : (code[index] > guess[index] ? 1 : -1);
			});
		}
		guess.should.eql(code);
	});
});
