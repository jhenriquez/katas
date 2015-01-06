var chai = require('chai'),
	lists = require('./functional-lists');

chai.should();

describe('function lists', function () {
	describe('EmptyList', function () {
		var emptyList;
		beforeEach(function () {
			emptyList = new lists.Empty();
		});

		it('should return true for isEmpty()', function () {
			emptyList.isEmpty().should.be.ok();
		});

		it('should return () for toString()', function () {
			emptyList.toString().should.eql('()');
		});

		it('should return 0 for length()', function () {
			emptyList.length().should.eql(0);
		});

		it('should return itself for remove()', function () {
			emptyList.remove('any value').should.eql(emptyList);
		});

		describe('push', function () {
			it('should return a ListNode', function () {
				emptyList.push('some value').should.be.instanceof(lists.Node);
			});

			it('should return itself as the next value in the returned node.', function () {
				emptyList.push('some value').next.should.eql(emptyList);
			});
		});
	});

	describe('ListNode', function () {
		var listNode;
		beforeEach(function () {
			listNode = new lists.Node(1);
		});
		
		it('should assume an EmptyList as the next value when not provided.', function () {
			listNode.next.should.be.instanceof(lists.Empty);
		});

		it('should return false for isEmpty()', function () {
			listNode.isEmpty().should.be.not.ok();
		});

		it('should return (1) for new ListNode(1)', function () {
			listNode.toString().should.eql('(1)');
		});

		it('should return (0 1) for new ListNode(1).push(0).toString()', function () {
			var list01 = listNode.push(0);
			list01.toString().should.eql('(0 1)');
		});

		it('should return 1 for new ListNode(1).length()', function () {
			listNode.length().should.eql(1);
		});

		it('should return 2 for new ListNode(1).push(1).length()', function () {
			listNode.push(1).length().should.eql(2);
		});

		it('should return 1 for new ListNode(1).head()', function () {
			listNode.head().should.eql(1);
		});

		describe('push', function () {
			it('should return a ListNode', function () {
				listNode.push('some value').should.be.instanceof(lists.Node);
			});

			it('should return itself as the next value in the returned node.', function () {
				listNode.push('some value').next.should.eql(listNode);
			});
		});
	});
});