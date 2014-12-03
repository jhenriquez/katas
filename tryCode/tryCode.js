var code = [];

function randomInt(max, min) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function tryCode(indications, previous) {
	if (!indications) {
		 previous = [randomInt(9,0), randomInt(9,0), randomInt(9,0)];
		 return previous;
	}
	previous = indications.map(function (value, index) {
		return previous[index] + (value * -1);
	});
	return previous;
}

module.exports = tryCode;