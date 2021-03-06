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
EmptyList.prototype.count = function(x) { return 0; };

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
ListNode.prototype.count = function (x) {
  return (this.head() === x ? 1 : 0) + this.tail().count(x);
};
ListNode.prototype.length = function() {
	return 1 + this.tail().length();
};
ListNode.prototype.push = function(x) { return new ListNode(x, this); };
ListNode.prototype.remove = function(x) {
	var count = this.count(x);
	function traverse(l) {
		if (l instanceof ListNode) {
			if (l.head() === x) {
				count--;
				return traverse(l.tail());
			} else {
				return count === 0 ? l : new ListNode(l.head(),traverse(l.tail()));
			}
		} else {
			return l;
		}
	}
	return traverse(this);
};
ListNode.prototype.append = function(xs) {
	function collect(l) {
		return (l instanceof EmptyList) ? [] : [l.head()].concat(collect(l.tail()));
	}
	return collect(this).reverse().reduce(function (l, value) { return l.push(value); }, xs);
};

module.exports.Empty = EmptyList;
module.exports.Node = ListNode;