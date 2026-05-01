// 2. Implement Binary Search using recursion.

class Node{
    constructor(value)
    {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor()
    {
        this.root = null;
    }

    insert(value)
    {
        const node = new Node(value);

        if(this.root == null)
        {
            this.root = node;
            return;
        }

        let current = this.root;

        while(true)
        {
            if(node.data < current.data)
            {
                if(current.left == null)
                {
                    current.left = node;
                    return
                }
                current = current.left;
            }
            else
            {
                if(current.right == null)
                {
                    current.right = node;
                    return;
                }
                current = current.right
            }
        }

    }

    search(node,value)
    {
        if (node === null) {
        return false;
    }

    if (node.data === value) {
        return true;
    }

    if (value < node.data) {
        return this.search(node.left, value);
    } else {
        return this.search(node.right, value);
    }
    }

}

const bt = new BinaryTree()

bt.insert(12)
bt.insert(45)
bt.insert(46)
bt.insert(8)
bt.insert(23)
bt.insert(0)
bt.insert(4)
bt.insert(60)

console.log( bt.search(bt.root,60))
