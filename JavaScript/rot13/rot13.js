function rot13(txt) {
	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
	transform  = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
	return txt.split('').map(function (v) {
		return lookup.indexOf(v) === -1 ? v : transform.charAt(lookup.indexOf(v));
	}).join('');
}

module.exports = rot13;