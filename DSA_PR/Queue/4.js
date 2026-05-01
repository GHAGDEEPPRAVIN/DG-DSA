// 4. Implement a circular queue.

class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.data = new Array(capacity);
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }

    enqueue(value) {
        if (this.size === this.capacity) return "Queue Full";

        this.rear = (this.rear + 1) % this.capacity;
        this.data[this.rear] = value;
        this.size++;
    }

    dequeue() {
        if (this.size === 0) return "Queue Empty";

        let removed = this.data[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.size--;

        return removed;
    }

    peek() {
        if (this.size === 0) return "Queue Empty";
        return this.data[this.front];
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }

    print() {
        let result = [];
        for (let i = 0; i < this.size; i++) {
            result.push(this.data[(this.front + i) % this.capacity]);
        }
        console.log(result);
    }
}

let q = new CircularQueue(5);

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

console.log(q.dequeue()); 
console.log(q.dequeue()); 

q.enqueue(6);
q.enqueue(7);

q.print();