// 5. Find the next greater element for each element in an array.

class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(value) {
        this.items[++this.top] = value;
    }

    pop() {
        if (this.top === -1) return null;
        return this.items[this.top--];
    }

    peek() {
        if (this.top === -1) return null;
        return this.items[this.top];
    }

    isEmpty() {
        return this.top === -1;
    }
}

function nextGreaterElement(arr) {
    let n = arr.length;
    let result = new Array(n).fill(-1);
    let stack = new Stack();

    for (let i = n - 1; i >= 0; i--) {
        while (!stack.isEmpty() && stack.peek() <= arr[i]) {
            stack.pop();
        }

        if (!stack.isEmpty()) {
            result[i] = stack.peek();
        }

        stack.push(arr[i]);
    }

    return result;
}

let arr = [4, 5, 2, 25];
console.log(nextGreaterElement(arr));