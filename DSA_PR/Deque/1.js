// 1. Implement a deque using an array.

class Deque {
    constructor()
    {
        this.data = [];
    }

    endequeRear(value)
    {
        this.data.push(value)
    }

    endequeFront(value)
    {
        this.data.unshift(value)
    }


    dedequeFront()
    {
        this.data.splice(0,1)
    }

    dedequeRear()
    {
        this.data.splice(this.data.length-1,1)
    }

    peekFront()
    {
        return this.data[0]
    }
    
    peekRear()
    {
        return this.data[this.data.length-1]
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

let deque = new Deque();

deque.endequeRear(1);
deque.endequeRear(2);
deque.endequeRear(3);
deque.endequeRear(4);

deque.endequeFront(-2);
deque.endequeFront(-1);
deque.endequeFront(0);

deque.dedequeRear()

console.log("peek front :",deque.peekFront());
console.log("peek rear :",deque.peekRear())

console.log("print :",deque.print());