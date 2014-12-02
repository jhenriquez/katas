/*
When working with color values in JavaScript it can sometimes be useful to extract the individual
red, green, and blue (RGB) component values for a color. 

Implement a hexStringToRGB() function that meets these requirements:

Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
Returns an object with the structure {r:255, g:153, b:51} where r, g, and b range from 0 through 255
Note, your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF").
*/

function hexStringToRGB(color) {
	var match = color.match(/^#?([0-9a-fA-F]{1,2})([0-9a-fA-F]{1,2})([0-9a-fA-F]{1,2})+$/i);
	return {
		r: parseInt(match[1],16),
		g: parseInt(match[2],16),
		b: parseInt(match[3],16)
	}
}

module.exports = hexStringToRGB;
