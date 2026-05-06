// 1. Insert a node at the beginning of a doubly linked list.

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    insertAtFirst(value) {
        let newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    printForward() {
        let curr = this.head;
        let res = [];

        while (curr) {
            res.push(curr.data);
            curr = curr.next;
        }

        console.log(res.join(" <-> "));
    }
}

let list = new DoublyLinkedList();

list.insertAtFirst(3);
list.insertAtFirst(2);
list.insertAtFirst(1);

list.printForward();