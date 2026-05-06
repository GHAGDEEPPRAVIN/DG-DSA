// 2. Implement a deque using a doubly linked list.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueueFront(data) {
        const node = new Node(data);

        if (this.front == null) {
            this.front = this.rear = node;
            return;
        }

        node.next = this.front;
        this.front.prev = node;
        this.front = node;

    }

    enqueueRear(data) {
        const node = new Node(data);

        if (this.rear == null) {
            this.front = this.rear = node;
            return;
        }

        node.prev = this.rear;
        this.rear.next = node;
        this.rear = node;
    }

    dequeueFront() {
        if (this.front == null) {
            return;
        }

        if (this.front == this.rear) {
            this.front = this.rear = null;
            return;
        }
        this.front = this.front.next;
        this.front.prev = null;
    }

    dequeueRear() {
        if (this.rear == null) {
            return;
        }

        if (this.front == this.rear) {
            this.front = this.rear = null;
            return;
        }
        this.rear = this.rear.prev;
        this.rear.next = null
    }

    peekFront() {
        return this.front.data
    }

    peekRear() {
        return this.rear.data
    }

    isEmpty()
    {
        if(this.front==null && this.rear == null)
        {
            return true;
        }
        return false;
    }

    printFront()
    {
        let current = this.front
        while(current)
        {
            console.log(current.data)
            current = current.next
        }
    }

    printRear()
    {
        let current = this.rear
        while(current)
        {
            console.log(current.data)
            current = current.prev

        }
    }

}

const deque = new Deque()

// deque.enqueueFront(10)
// deque.enqueueFront(11)
// deque.enqueueFront(12)
// deque.enqueueFront(13)
// deque.enqueueFront(14)
// deque.enqueueFront(15)

// deque.enqueueRear(9)
// deque.enqueueRear(8)
// deque.enqueueRear(7)
// deque.enqueueRear(6)
// deque.enqueueRear(5)
// deque.enqueueRear(4)

console.log(deque.isEmpty())