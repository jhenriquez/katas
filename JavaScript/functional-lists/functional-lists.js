function List() {}

function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function() { return '()'; };
EmptyList.prototype.isEmpty = function() { return true; };
EmptyList.prototype.length = function() { return 0; };
EmptyList.prototype.push = function(x) { return new ListNode(x, this); };
EmptyList.prototype.remove = function(x) { return this; };
EmptyList.prototype.append = function(xs) { return xs;  };

function ListNode(value, next) { 
	this.value = value;
	this.next = next || new EmptyList();
}

ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() { return false; };

ListNode.prototype.toString = function() {	
	function collect(l) {
		return (l instanceof EmptyList) ? '' : l.head() + collect(l.tail());
	}
	return '(' + collect(this).split('').join(' ')  + ')';
};

ListNode.prototype.head = function() { return this.value; };
ListNode.prototype.tail = function() { return this.next;  };
ListNode.prototype.length = function() {
	return 1 + this.tail().length();
};
ListNode.prototype.push = function(x) { return new ListNode(x, this); };
ListNode.prototype.remove = function(x) {
	function collect(l) {
		return (l instanceof EmptyList)? [l] : ((l.head() === x) ? [] : [new ListNode(l.head())]).concat(collect(l.tail()));
	}
	
	return collect(this)
		.reduce(function (xs, l) {
			return xs && xs.append(l) || l;
		});
};
ListNode.prototype.append = function(xs) {
	function collect(l, acc) {
		return (l instanceof EmptyList) ? [] : [l.head()].concat(collect(l.tail()));
	}
	return collect(this).reverse().reduce(function (l, value) { return l.push(value); }, xs);
};

module.exports.Empty = EmptyList;
module.exports.Node = ListNode;