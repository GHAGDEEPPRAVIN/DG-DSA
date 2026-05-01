// 1. Implement a queue using an array.

class Queue {
    constructor()
    {
        this.data = [];
    }

    enqueue(value)
    {
        this.data.push(value)
    }

    dequeue()
    {
        this.data.splice(0,1)
    }

    peek()
    {
        return this.data[0]
    }

    isEmpty()
    {
        return this.data.length === 0
    }

    print()
    {
        return console.log(this.data)
    }
}

let queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

console.log(queue.peek())

queue.print()