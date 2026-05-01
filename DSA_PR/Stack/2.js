// 2. Implement a stack using a linked list.

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null; 
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    pop() {
        if (this.head === null) return null;

        const removed = this.head;
        this.head = this.head.next;
        this.length--;

        return removed.data;
    }

    peek() {
        if (this.head === null) return null;
        return this.head.data;
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

let num = stack.peek();

console.log(num); 