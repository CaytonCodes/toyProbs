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
  // if index is entered, inserts at provided index
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
    } else if (index === 'tail' || index === this.length) {
      if (this.tail) {
        this.tail.next = node;
      }
      this.tail = node;

      // handle an empty list
      if (this.head === null) {
        this.head = node;
      }
    } else {
      const precedingNode = this.findNode(index - 1);

      node.next = precedingNode.next;
      precedingNode.next = node;
    }

    this.length += 1;
    return node;
  }

  findNode(index) {
    let currentNode = this.head;
    for (let i = 1; i <= index; i += 1) {
      if (currentNode === null) {
        return null;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

module.exports = {
  LinkedList,
};

let list = new LinkedList();
list.insert(0);
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5, 5);
console.log(list.length);
console.log(list.findNode(0));
console.log(list.findNode(8));
