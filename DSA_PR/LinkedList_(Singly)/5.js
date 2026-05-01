// Merge two sorted linked lists.

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
}

function merge(l1, l2) {
    let dummy = new Node(0);
    let curr = dummy;

    while (l1 && l2) {
        if (l1.data < l2.data) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    curr.next = l1 || l2;

    return dummy.next;
}

let list1 = new LinkedList();
list1.insert(1);
list1.insert(3);
list1.insert(5);

let list2 = new LinkedList();
list2.insert(2);
list2.insert(4);
list2.insert(6);

let mergedHead = merge(list1.head, list2.head);

let mergedList = new LinkedList();
mergedList.head = mergedHead;

mergedList.print();