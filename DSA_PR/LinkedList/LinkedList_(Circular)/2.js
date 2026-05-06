//  2. Delete a node from a circular linked list.

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

    delete(value) {
        if (!this.head) return;

        let curr = this.head;
        let prev = null;

        if (this.head.data === value && this.head.next === this.head) {
            this.head = null;
            return;
        }

        if (this.head.data === value) {
            let last = this.head;

            while (last.next !== this.head) {
                last = last.next;
            }

            this.head = this.head.next;
            last.next = this.head;
            return;
        }

        do {
            prev = curr;
            curr = curr.next;

            if (curr.data === value) {
                prev.next = curr.next;
                return;
            }
        } while (curr !== this.head);
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

list.delete(1);
list.print();

list.delete(3);
list.print();