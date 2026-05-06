// 1. Implement a stack using an array.

class Stack {
    constructor()
    {
        this.list = [];
        this.length = this.list.length;
    }

    push(value)
    {
        this.list[this.length] = value;
        this.length = this.list.length;
    }

    pop()
    {
        this.list.pop();
        this.length = this.list.length;
    }

    peak()
    {
        const num = this.list[this.length-1];
        return num;
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

let num = stack.peak()

console.log(num)