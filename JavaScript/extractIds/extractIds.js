/*
Complete the method so that it returns an array of all ID's passed in.
The data structure will be similar to the following:
*/

var data = {
  id: 1,
  items: [
    {id: 2},
    {id: 3, items: [
      {id: 4},
      {id: 5}
    ]}
  ]
};

/*
The method should be able to handle the case of empty data being passed in.

Note: The only arrays that need to be traversed are those assigned to the "items" property.
*/

function extractIds (data) {
	var ids = data && data.id ? [data.id] : [];
	var items = data && data.items && Array.isArray(data.items) ? data.items : [];
	
	items.map(function (item) {  ids = ids.concat(extractIds(item)); });

	return ids;
}

extractIds(data); // should return [1,2,3,4,5]

module.exports = extractIds;