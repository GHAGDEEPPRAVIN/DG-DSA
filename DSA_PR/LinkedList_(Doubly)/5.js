// 5. Remove duplicates from a sorted doubly linked list.

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

        if (!this.head) {
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

    removeDuplicates() {
        let curr = this.head;

        while (curr && curr.next) {
            if (curr.data === curr.next.data) {
                let dup = curr.next;

                curr.next = dup.next;

                if (dup.next) {
                    dup.next.prev = curr;
                }
            } else {
                curr = curr.next;
            }
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
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(3);
list.insert(4);

console.log("Before:");
list.printForward();

list.removeDuplicates();

console.log("After:");
list.printForward();