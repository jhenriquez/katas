function orderWeight(strng) {
  return strng
          .split(' ')
	  .map(w => { return { number: w, weight: getWeightValue(w) }; })
	  .sort((a,b) => a.weight - b.weight || a.number.localeCompare(b.number))
	  .map(w => w.number)
	  .reduce((r,v) => r + ' ' + v, '').trim();
}

function getWeightValue(num) {
  return num.split('').map(Number).reduce((r,n) => r + n, 0);
}

module.exports = orderWeight;
