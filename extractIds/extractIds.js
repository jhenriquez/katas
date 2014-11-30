function extractIds (data) {
	var ids = data && data.id ? [data.id] : [];
	var items = data && data.items && Array.isArray(data.items) ? data.items : [];
	
	items.map(function (item) {  ids = ids.concat(extractIds(item)); });

	return ids;
}

module.exports = extractIds;