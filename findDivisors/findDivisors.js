function divisors(integer) {
  var r = Array.apply(null, new Array(integer-2))
    .map(function (v,i) { return i + 2; })
    .filter(function (value) {
      return integer % value === 0;
    });
  return r.length === 0 ? integer + " is prime" : r;
};

module.exports = divisors;