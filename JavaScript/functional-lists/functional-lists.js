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
	return 1 + this.tail().length();
};
ListNode.prototype.push = function(x) { return new ListNode(x, this); };
ListNode.prototype.remove = function(x) {
	return this.head() === x ? this.tail().remove(x) : new ListNode(this.head(),this.tail().remove(x));
};
ListNode.prototype.append = function(xs) {
	function collectTail(l) {
		return l.tail() instanceof EmptyList ? xs.push(l.head()) : collectTail(l.tail());
	}
	return this.length() > 1 ? collectTail(this).push(this.head()) : xs.push(this.head());
	
	//return this.tail() instanceof EmptyList ? xs.push(this.head()) : this.tail().append(xs);
};

module.exports.Empty = EmptyList;
module.exports.Node = ListNode;	