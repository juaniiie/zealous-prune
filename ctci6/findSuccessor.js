class TreeNode {
  constructor(value) {
    this.val = value;
    this.parent = this.left = this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
    }
    else {
      let n = this.root,
        branch;
      while (n) {
        branch = value < n.val ? 'left' : 'right';
        if (!n[branch]) {
          break;
        }
        n = n[branch];
      }
      node.parent = n;
      n[branch] = node;
    }
  }
}

/**
 * Solution
 */
function findSuccessor(node) {
    if (!node) {
        throw new Error('node cannot be null');
    }
    let original = node;
    let next = undefined;
    let root = null;

    function findRoot() {
        let n = node;
        while (!root) {
            if (!n.parent) {
                root = n;
            }
            n = node.parent;
        }
    }

    findRoot();

    function inOrder(node) {
        if (!node || next) {
            return;
        }

        inOrder(node.left);

        if (node.val > original.val) {
            next = node;
            return;
        }

        inOrder(node.right);
    }

    inOrder(root);

    return next ? next.val : next;
}

/**
 * Test
 */

let testTree = new Tree();

[10, 9, 11].forEach((v) => {
    testTree.add(v)
});

let testNode = testTree.root;

findSuccessor(testNode);