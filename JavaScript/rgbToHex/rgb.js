/*
The rgb() method is incomplete. Complete the method so that passing in RGB decimal values 
will result in a hexadecimal representation being returned. 

The valid decimal values for RGB are 0 - 255. 
Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.
*/

function toHex(v) {
	if (isNaN(v)) { throw new TypeError(v + ' is invalid'); }
	var r = Math.floor(v).toString(16);
	return v < 16 ? ('0'+ r) : r;
}

function rgb (r, g, b) {
	r = r > 255 ? 255 : r < 0 ? 0 : r;
	g = g > 255 ? 255 : g < 0 ? 0 : g;
	b = b > 255 ? 255 : b < 0 ? 0 : b;
	return (toHex(r) + toHex(g) + toHex(b)).toUpperCase();
}

module.exports = rgb;