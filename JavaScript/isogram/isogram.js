function Isogram() {
}

Isogram.prototype.check = function (word) {
  if (word === '') {
    return true;
  }

  if (word.match(/[\d]/ig)) {
    return false;
  }

  function frequency(fq, n) {
    fq[n] = fq[n] || 0;
    fq[n] += 1;
    return fq;
  }

  var fq = word.toLowerCase().split('').reduce(frequency, {});
 
  var variations = Object.keys(fq).map(function (k) { return fq[k]; }).reduce(frequency, {});

  return Object.keys(variations).length === 1;
};

module.exports = Isogram;
