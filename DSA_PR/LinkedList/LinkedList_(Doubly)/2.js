// 2. Delete a node from a doubly linked list.

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

    insert(value) {
        let newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let curr = this.head;

        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        newNode.prev = curr;
    }

    delete(value) {
        let curr = this.head;

        if (!curr) return;

        if (curr.data === value) {
            this.head = curr.next;
            if (this.head) {
                this.head.prev = null;
            }
            return;
        }

        while (curr && curr.data !== value) {
            curr = curr.next;
        }

        if (!curr) return;

        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;
        }
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

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

list.printForward();

list.delete(3);

list.printForward();

list.delete(1);

list.printForward();