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

		it('should return (1 2) for new ListNode(1).append(new ListNode(2)).toString()', function () {
			var list2 = new lists.Node(2);
			var list12 = listNode.append(list2);
			list12.toString().should.eql('(1 2)');
		});

		describe('appending (b a) to (c a)', function () {
			var ba;
			var ca;
			var baca;
			beforeEach(function () {
				ca = new lists.Node('a').push('c');
				ba = new lists.Node('a').push('b');
				caba = ca.append(ba);
			});
			it('should have the sum of both lengths.', function () {
				caba.length().should.eql(ca.length() + ba.length());
			});

			it('(b a) should remain untouched.', function () {
				caba.tail().tail().should.eql(ba);
			});

			it('should read (c a b a)', function () {
				caba.toString().should.eql('(c a b a)');
			});

			describe('more complex appends', function () {
				it('should read (a b c a b c) when appending (a b c) twice', function () {
					var l1 = new lists.Empty().push('c').push('b').push('a');
					l1.append(l1).toString().should.eql('(a b c a b c)');
				});

				it('should be able to append 5 item lists or more', function () {
					var l5 = new lists.Empty().push(4).push(3).push(2).push(2).push(1).push(0);
					var l10 = l5.append(l5);
					l10.length().should.eql(10);
					l10.toString().should.eql('(0 1 2 3 4 0 1 2 3 4)');
				});

				it('should be able to append 5 item lists or more toString', function () {
					var l5 = new lists.Empty().push(4).push(3).push(2).push(2).push(1).push(0);
					var l10 = l5.append(l5);
					l10.toString().should.eql('(0 1 2 3 4 0 1 2 3 4)');
				});
			});

			describe('removing', function () {
				it("should read (c b) removing 'a' from (c a b a)", function () {
					caba.remove('a').toString().should.eql('(c b)');
				});

				describe('sharing', function () {
					it('should share the tail when the head is removed.', function () {
						chai.expect(caba.remove('c') === caba.tail()).should.be.ok();
					});	
				});

			});
		});

		describe('push', function () {
			it('should return a ListNode', function () {
				listNode.push('some value').should.be.instanceof(lists.Node);
			});

			it('should return itself as the next value in the returned node.', function () {
				listNode.push('some value').tail().should.eql(listNode);
			});
		});
	});
});