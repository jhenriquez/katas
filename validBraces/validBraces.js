function open(char) {
	switch(char){
		case '}':
			return '{';
		case ')':
			return '(';
		case ']':
			return '(';
	}
}

function validBraces(braces) {
	var isValid = true,
	 scopes = 
		braces
		.split('')
		.reduce(
			function (scopes, symbol) {
				if(/[{(\[]/.test(symbol)) {
					scopes[0].push(symbol);
				} else {
					scopes[1].push(symbol);
				}
				return scopes;
			}, [[],[]]);

	console.log(scopes[0]);
	console.log(scopes[1]);

	if (scopes[0].length !== scopes[1].length) {
		return false;
	}

	var scopeIndex = 0;

	do {
		console.log(scopes[0][scopeIndex],'===',open(scopes[1][scopeIndex]));
		isValid = scopes[0][scopeIndex] === open(scopes[1][scopeIndex]); 
		console.log('isValid',isValid);
		if (!isValid) {
			return false;
		}
		scopeIndex++;
	} 
	while(scopeIndex < scopes[0].length);

	return isValid;
}

module.exports = validBraces;