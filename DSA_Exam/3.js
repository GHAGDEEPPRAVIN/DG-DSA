// Reverse a singly linked list.

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class SinglyList {
    constructor() {
        this.head = null
    }

    push(value) {
        const node = new Node(value);

        if (this.head == null) {
            this.head = node;
            return;
        }

        let current = this.head

        while (current.next) {
            current = current.next;
        }

        current.next = node;
    }

    print() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
    
   reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next; 
            current.next = prev; 
            prev = current;      
            current = next;     
        }

        this.head = prev;
    }
}

let linkedList = new SinglyList();

linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)
linkedList.push(5)
linkedList.push(6)
linkedList.push(7)

linkedList.print()

// reverse the linked list
linkedList.reverse()
linkedList.print()