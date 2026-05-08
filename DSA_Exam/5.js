// Implement preorder traversal.

class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value);

        if (this.root == null) {
            this.root = node;
            return;
        }

        let current = this.root;

        while (true) {
            if (node.data < current.data) {
                if (current.left == null) {
                    current.left = node
                    return;
                }
                current = current.left
            }
            else {
                if (current.right == null) {
                    current.right = node
                    return;
                }
                current = current.right
            }
        }
    }

    preorder(node) {
        // NLR
        if (!(node == null)) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right)
        }
    }
}

let bt = new BinaryTree()

bt.insert(6)
bt.insert(1)
bt.insert(3)
bt.insert(7)
bt.insert(8)
bt.insert(30)
bt.insert(10)
bt.insert(50)
bt.insert(0)

bt.preorder(bt.root)