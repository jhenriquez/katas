function solution(input, markers) {
	return markers.reduce(function (input, marker) {
		var regex = new RegExp('\\s\\' + marker + '.+','g');
		return input.replace(regex,'').trim();
	}, input);
}

module.exports = solution;