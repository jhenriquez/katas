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
	var str = '(';
	var node = this;
	while(node instanceof ListNode) {
		str += node.value + ' ';
		node = node.next; 
	}
	return str.trim()  + ')';
};

ListNode.prototype.head = function() { return this.value; };
ListNode.prototype.tail = function() { return this.next;  };
ListNode.prototype.length = function() {
	var length = 0;
	var node = this;
	while(node instanceof ListNode) { length++; node = node.next; }
	return length;
};
ListNode.prototype.push = function(x) { return new ListNode(x, this); };
ListNode.prototype.remove = function(x) {
	var newList = new EmptyList();
	var node = this;
	while(node instanceof ListNode) {
		if (node.value !== x) {
			newList = newList.push(node);
		}
	}
	return newList;
};
ListNode.prototype.append = function(xs) {
	var newList = new EmptyList();
	var node = this;
	while(node instanceof ListNode) { newList.push(node); node = node.next; }
	var node = xs;
	while(node) { newList.push(node); node = node.next; }
	return newList;
};

module.exports.Empty = EmptyList;
module.exports.Node = ListNode;	