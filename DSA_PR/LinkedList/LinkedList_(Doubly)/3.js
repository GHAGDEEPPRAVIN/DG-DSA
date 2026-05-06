// 3. Reverse a doubly linked list.

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

    reverse() {
        let curr = this.head;
        let temp = null;

        while (curr) {
            temp = curr.prev;

            curr.prev = curr.next;
            curr.next = temp;

            curr = curr.prev;
        }

        if (temp) {
            this.head = temp.prev;
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

console.log("Original:");
list.printForward();

list.reverse();

console.log("Reversed:");
list.printForward();