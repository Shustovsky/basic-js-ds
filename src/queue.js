//thx to https://dev.to/mumin/use-linkedlist-when-implementing-queues-in-js-2akl
const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
    constructor() {
        this.first = null;
        this.last = null;
    }

    getUnderlyingList() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new ListNode(value);

        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return this
    }

    dequeue() {
        if (this.first === null || this.last === null) return null

        const itemToBeRemoved = this.first.value;

        if (this.first === this.last) {
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        return itemToBeRemoved
    }
}

module.exports = {
    Queue
};