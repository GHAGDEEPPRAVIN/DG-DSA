// 2. Implement a queue using two stacks.

class Stack {
    constructor() {
        this.data = [];
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    isEmpty() {
        return this.data.length === 0;
    }
}

class Queue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    enqueue(value) {
        this.s1.push(value);
    }

    dequeue() {
        if (this.s2.isEmpty()) {
            while (!this.s1.isEmpty()) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.pop();
    }

    peek() {
        if (this.s2.isEmpty()) {
            while (!this.s1.isEmpty()) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.peek();
    }

    isEmpty() {
        return this.s1.isEmpty() && this.s2.isEmpty();
    }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); 
console.log(queue.peek());    
console.log(queue.dequeue()); 