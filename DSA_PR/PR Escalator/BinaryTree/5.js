// 5. Check if a binary tree is balanced.

class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if (!this.root) {
            this.root = node;
            return;
        }

        let curr = this.root;

        while (true) {
            if (value < curr.data) {
                if (!curr.left) {
                    curr.left = node;
                    return;
                }
                curr = curr.left;
            } else {
                if (!curr.right) {
                    curr.right = node;
                    return;
                }
                curr = curr.right;
            }
        }
    }

    checkHeight(node) {
        if (!node) return 0;

        let left = this.checkHeight(node.left);
        if (left === -1) return -1;

        let right = this.checkHeight(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        return 1 + Math.max(left, right);
    }

    isBalanced() {
        return this.checkHeight(this.root) !== -1;
    }
}

let bt = new BinaryTree();

bt.insert(37)
bt.insert(25)
bt.insert(49)
bt.insert(7)
bt.insert(30)
bt.insert(0)
bt.insert(10)
bt.insert(33)
bt.insert(40)
bt.insert(57)

console.log(bt.isBalanced());