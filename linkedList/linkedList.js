/* eslint-disable no-param-reassign */
/* eslint-disable max-classes-per-file */
/*
Singly linked list
list object contains head and tail nodes
each node contains value and next node properties

list methods: insert and delete
*/

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // inserts a provided node at specified position (head, tail, or index)
  insert(value, index = 'tail') {
    // handle edge case of bad index
    if (index > this.length) { return null; }

    const node = new ListNode(value);

    if (index === 'head' || index === 0) {
      node.next = this.head;
      this.head = node;

      // handle an empty list
      if (this.tail === null) {
        this.tail = node;
      }
    }

    if (index === 'tail' || index === this.length) {
      this.tail.next = node;
      this.tail = node;

      // handle an empty list
      if (this.head === null) {
        this.head = node;
      }
    }

    this.length += 1;
    return node;
  }
}

module.exports = {
  LinkedList,
};