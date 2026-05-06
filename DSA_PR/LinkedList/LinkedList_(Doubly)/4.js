// 4. Find all pairs with a given sum in a sorted doubly linked list.

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

    findTail() {
        let curr = this.head;

        while (curr && curr.next) {
            curr = curr.next;
        }

        return curr;
    }

    findPairsWithSum(k) {
        let left = this.head;
        let right = this.findTail();

        let result = [];

        while (left && right && left !== right && right.next !== left) {
            let sum = left.data + right.data;

            if (sum === k) {
                result.push([left.data, right.data]);
                left = left.next;
                right = right.prev;
            } 
            else if (sum < k) {
                left = left.next;
            } 
            else {
                right = right.prev;
            }
        }

        return result;
    }

    print() {
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
list.insert(5);
list.insert(6);
list.insert(8);
list.insert(9);

console.log("List:");
list.print();

console.log("Pairs with sum 7:");
console.log(list.findPairsWithSum(7));