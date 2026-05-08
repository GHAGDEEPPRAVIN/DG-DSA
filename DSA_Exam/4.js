// Detect if a linked list is circular.

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

    push(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            node.next = this.head;
            return;
        }

        let current = this.head;

        while (current.next !== this.head) {
            current = current.next;
        }

        current.next = node;
        node.next = this.head;
    }

    print() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let current = this.head;

        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }

    isCircular() {
        if (!this.head) {
            return false;
        }

        let current = this.head.next;

        while (current && current !== this.head) {
            current = current.next;
        }

        return current === this.head;
    }

}


let list = new CircularLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);

list.print()

console.log(list.isCircular())