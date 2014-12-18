/*
Finish the namespace function so that it sets or gets the value at the path specified.
The first argument should be the root object that the path belongs to.
The 2nd argument is the path itself and the 3rd optional argument is the value to set at the path.

If a value is provided then the path will be set to that value.
Any objects not present within the path will be created automatically in order for the path to be successfully set.
*/


function namespace(root, path, value) {
	var current = root;
	path.split('.').map(function (property, index, arr) {
		current[property] = current[property] || {};
		current[property] = index === (arr.length - 1) ? value : current[property];
		current = current[property];
	});
	return value ? root : current;
};

module.exports = namespace;