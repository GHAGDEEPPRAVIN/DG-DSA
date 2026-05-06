// 5. Detect if a linked list is circular.

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

    isCircular() {
        if (!this.head) return false;

        let curr = this.head.next;

        while (curr && curr !== this.head) {
            curr = curr.next;
        }

        return curr === this.head;
    }
}

let list = new CircularLinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

console.log(list.isCircular());