module.exports = (function () {
	var code = [];

	function randomInt(max, min) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

    return function (indications) {
		if (indications) {
			code = indications.map(function (value, index) {
				return code[index] = code[index] - (value * -1);
			});
			return code;
		}
		code = [randomInt(9,0), randomInt(9,0), randomInt(9,0)];
		return code;
    }
})();;