module.exports = (function () {
	var code = [5,5,5];
    return function (indications) {
		if (indications) {
			code = indications.map(function (value, index) {
				return code[index] = code[index] - (value * -1);
			});
			return code;
		}
		return code;
    }
})();;