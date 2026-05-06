//  Remove the nth node from the end.

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

    removeNthFromEnd(n) {
        let dummy = new Node(0);
        dummy.next = this.head;

        let slow = dummy;
        let fast = dummy;

        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }

        while (fast.next) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;

        this.head = dummy.next;
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

list.removeNthFromEnd(2);
console.log("After Removing 2nd from End:");
list.print();