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
	var str = '';
	var node = this;
	while(node instanceof ListNode) {
		str += node.head();
		node = node.tail(); 
	}
	return '(' + str.split('').join(' ')  + ')';
};

ListNode.prototype.head = function() { return this.value; };
ListNode.prototype.tail = function() { return this.next;  };
ListNode.prototype.length = function() {
	var length = 0;
	var node = this;
	while(node instanceof ListNode) { length++; node = node.tail(); }
	return length;
};
ListNode.prototype.push = function(x) { return new ListNode(x, this); };
ListNode.prototype.remove = function(x) {
	var newList = new EmptyList();
	var node = this;
	while(node instanceof ListNode) {
		if (node.head() !== x) {
			newList = newList.append(node);
		}
		node = node.tail();
	}
	return newList;
};
ListNode.prototype.append = function(xs) {
	var heads = [];
	var newList;
	var node = this;
	while(node instanceof ListNode) { heads.push(node.head()); node = node.tail(); }
	for(var i = heads.length - 1; i >= 0; i--) {
		newList = newList && newList.push(heads[i]) || new ListNode(heads[i],xs);
	}
	return newList;
};

module.exports.Empty = EmptyList;
module.exports.Node = ListNode;	