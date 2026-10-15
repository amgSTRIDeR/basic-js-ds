const { NotImplementedError } = require('../lib');
const {ListNode} = require("../extensions/list-node");
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  node = null;
  getUnderlyingList() {
    return this.node;
  }

  enqueue(value) {
    if(this.node === null) {
      this.node = {value: value, next: null};
    } else {
      let emptyNode = this.node;
      while(emptyNode.next !== null) {
        emptyNode = emptyNode.next;
      }
      emptyNode.next = {value: value, next: null};
    }
  }

  dequeue() {
    if(this.node === null) {
      return undefined;
    }
    const node = this.node.value;
    if(this.node.next) {
      this.node = this.node.next;
    }
    return node;
  }
}

module.exports = {
  Queue
};
