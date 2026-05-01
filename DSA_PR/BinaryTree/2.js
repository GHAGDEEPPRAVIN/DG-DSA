// 2. Implement preorder traversal.

class Node{
    constructor(value)
    {
        this.data = value;
        this.left=null;
        this.right=null;
    }
}

class binaryTree{
    constructor()
    {
        this.root = null
    }
    insert(value)
    {
        const node = new Node(value);

        if(this.root==null)
        {
            this.root = node;
            return;
        }

        let current = this.root
         
        while(true)
        {
            if(node.data<current.data)
            {
                if(current.left == null)
                {   
                    current.left = node;
                    return;
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
                current = current.right;
            }
        }
    }

    search(value)
    {
        let current = this.root;

        while(current)
        {
            if(current.data==value)
            {
                return true
            }
            if(value<current.data)
            {
                current = current.left
            }
            else
            {
                current = current.right   
            }
        }

        return false
    }

    preorder(node)
    {
        if(node!=null)
        {
            console.log(node.data)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

}


let bt = new binaryTree()

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

bt.preorder(bt.root)