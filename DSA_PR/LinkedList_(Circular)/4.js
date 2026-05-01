// 4. Split a circular linked list into two halves.

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

    split() {
        if (!this.head || this.head.next === this.head) {
            return [this.head, null];
        }

        let slow = this.head;
        let fast = this.head;

        while (fast.next !== this.head && fast.next.next !== this.head) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let head1 = this.head;
        let head2 = slow.next;

        let temp = head2;

        while (temp.next !== this.head) {
            temp = temp.next;
        }

        temp.next = head2;
        slow.next = head1;

        return [head1, head2];
    }

    print(head) {
        if (!head) return;

        let curr = head;
        let res = [];

        do {
            res.push(curr.data);
            curr = curr.next;
        } while (curr !== head);

        console.log(res.join(" -> ") + " -> (back to head)");
    }
}

let list = new CircularLinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);

let [head1, head2] = list.split();

console.log("First Half:");
list.print(head1);

console.log("Second Half:");
list.print(head2);