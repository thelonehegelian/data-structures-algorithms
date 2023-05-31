interface IBinaryTreeNode {
  value: number;
  left: IBinaryTreeNode | null;
  right: IBinaryTreeNode | null;
}

class BinaryTreeNode implements IBinaryTreeNode {
  value: number;
  left: IBinaryTreeNode | null;
  right: IBinaryTreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinaryTree {
  root: IBinaryTreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    // create a new node with the value passed to the function
    const newNode = new BinaryTreeNode(value);

    // if there is no root property on the tree, set the root to be the newly created node
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current: IBinaryTreeNode | null = this.root;
    // loop through the tree and find the correct position for the new node
    while (true) {
      // value is less than the value of the current node, go left
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
        // value is greater than the value of the current node, go right
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      } else {
        return undefined;
      }
    }
  }
  find(value: number) {
    if (this.root === null) return false;
    let current: IBinaryTreeNode | null = this.root;
    let found = false;
    // traverse the tree
    while (current && !found) {
      if (value < current.value) {
        // the root is now the left node
        current = current.left;
      } else if (value > current.value) {
        // the root is now the right node
        current = current.right;
      } else {
        found = true;
      }
      if (current === null) return false;
    }
  }

  // @todo redo all these
  bfs(value: number) {
    if (this.root === null) return false;

    let queue: IBinaryTreeNode[] = [];
    let current: IBinaryTreeNode | null = this.root;

    if (current !== null) {
      queue.push(current);
    }

    while (queue.length) {
      current = queue.shift() as IBinaryTreeNode | null;
      if (current === null) continue; // Undefined check
      if (current.value === value) return true;
      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }

    return false; // Return false if value is not found
  }

  dfsPreOrder(value: number) {
    if (this.root === null) return false;

    return this._dfsPreOrder(this.root, value);

  }

  // @todo refactor to remove excessive if statements
  private _dfsPreOrder(current: IBinaryTreeNode | null, value: number) {
    if (current === null) return false;

    if (current.value === value) return true;

    // if there is a left node, recursively call this function on the left node
    if (current.left !== null) {
      if (this._dfsPreOrder(current.left, value)) {
        return true;
      }

    }
    // if there is a right node, recursively call this function on the right node
    if (current.right !== null) {
      if (this._dfsPreOrder(current.right, value)) {
        return true;
      }
    }

    return false;
  }

  dfsPostOrder(value: number) {
    if (this.root === null) return false;

    return this._dfsPostOrder(this.root, value);

  }

  private _dfsPostOrder(current: IBinaryTreeNode | null, value: number) {
    if (current === null) return false;

    // if there is a left node, recursively call this function on the left node
    if (current.left !== null) {
      if (this._dfsPostOrder(current.left, value)) {
        return true;
      }

    }
    // if there is a right node, recursively call this function on the right node
    if (current.right !== null) {
      if (this._dfsPostOrder(current.right, value)) {
        return true;
      }
    }

    // Check the current node after its descendants
    if (current.value === value) return true;

    return false;

  }

  dfsInOrder(value: number) {
    if (this.root === null) return false;

    return this._dfsInOrder(this.root);
  }
  private _dfsInOrder(current: IBinaryTreeNode | null) {
    if (current === null) return;

    // first recur on left child
    this._dfsInOrder(current.left);

    // then print the data of node
    console.log(current.value);

    // now recur on right child
    this._dfsInOrder(current.right);
  }

}

export default BinaryTree;
