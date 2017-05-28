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
function findRoot(node) {
  let current = node;
  let root = null;
  while (current) {
    if (!current.parent) {
      root = current;
    }
    current = current.parent;
  }
  return root;
}

function findSuccessor(target) {
    if (!target) {
        throw new Error('node cannot be null');
    }
    let next;
    let root = findRoot(target);
    let found = false;

    function inOrderSearch(node) {
      if (!node) {
        return;
      }
      if (found) {
        next = node;
        return;
      }
      
      inOrderSearch(node.left);

      if (node === target) {
        found = true;
      }

      inOrderSearch(node.right);

    }
    
    inOrderSearch(root);

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

