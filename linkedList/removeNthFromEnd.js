/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

Note: ListNode: { this.val, this.next }
*/

/*
Input: head of linked list, integer n.
Output: head of same linked list with nth node FROM END of list removed.
Constraints: None provided, EC: do this in one pass.
Edge Cases: Removing only node from list --> null node; Empty list input --> null node;
Examples: see leetcode.

Approach:
Brute force: iterate throught list, find length.
  iterate again to n - 1,
    set next as next.next
  return head

Single Pass:
  instantiate queue to hold n + 1 nodes
  iterate through list
    add each node to queue, shifting once full
    when we find end of list
      set front of queue's next to point to next.next
  return head

Single Pass Optimized:
  only store the n + 1 th node in queue
  -- iterate through list, counting steps
    once we've gone n + 1 steps, track head of list
    for each subsequent step, move tracked node to its next
    when we reach end of list
      set tracked node's next to its next's next.
  return head
*/
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined) ? 0 : val;
    this.next = (next === undefined) ? null : val;
  }
}

const removeNthFromEnd = (head, n) => {
  const dummy = new ListNode(0, head);
  let firstNode = dummy;
  let secondNode = dummy;

  for (let i = 0; i < n + 1; i += 1) {
    firstNode = firstNode.next;
  }

  while (firstNode) {
    firstNode = firstNode.next;
    secondNode = secondNode.next;
  }

  secondNode.next = secondNode.next.next;
  return dummy.next;
};

module.exports = {
  removeNthFromEnd,
};
