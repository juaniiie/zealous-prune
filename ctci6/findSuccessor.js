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
function findLeftMost(node) {
  let current = node;

  while(current && current.left) {
    current = current.left
  }
  return current;
}

function findSucc(node) {
  if (!node) {
    throw new Error('node cannot be null');
  }
  let next;

  if (node.right) {
    next = findLeftMost(node.right);
  } else if (!node.right) {
    let levels = 0;
    
    while (levels !== 2) {
      if (node.parent) {
        possibleNext = node.parent;
      }
      levels++;
    }
    next = possibleNext;
  }

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


