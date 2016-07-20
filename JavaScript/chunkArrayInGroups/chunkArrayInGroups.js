
function chunkArrayInGroups(arr, size) {
  var rs = [];

  while((st = arr.splice(0,size)).length) { rs.push(st); }

  return rs;
}

module.exports = chunkArrayInGroups;
