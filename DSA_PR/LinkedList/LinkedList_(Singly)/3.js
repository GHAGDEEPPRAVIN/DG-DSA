// Find the middle of a linked list.

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let curr = this.head;

        while (curr.next !== null) {
            curr = curr.next;
        }

        curr.next = newNode;
    }

    print() {
        let curr = this.head;
        let result = [];

        while (curr) {
            result.push(curr.data);
            curr = curr.next;
        }

        console.log(result.join(" -> "));
    }

    middle() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
}

let list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

console.log("Original:");
list.print();

console.log("Middle:", list.middle().data);