// 1. Insert a node in a circular linked list.

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }

        let curr = this.head;

        while (curr.next !== this.head) {
            curr = curr.next;
        }

        curr.next = newNode;
        newNode.next = this.head;
    }

    print() {
        if (!this.head) return;

        let curr = this.head;
        let res = [];

        do {
            res.push(curr.data);
            curr = curr.next;
        } while (curr !== this.head);

        console.log(res.join(" -> ") + " -> (back to head)");
    }
}

let list = new CircularLinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

list.print();