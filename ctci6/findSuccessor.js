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
 * N is the number of nodes
 * Time: worst case O(N)
 * Space: O(1)
 */
function findLeftMost(node) {
  let current = node;

  while(current && current.left) {
    current = current.left
  }
  return current;
}

function findSuccessor(node) {
  if (!node) {
    throw new Error('node cannot be null');
  }
  let next;

  if (node.right) {
    next = findLeftMost(node.right);
  } else if (!node.right) {
    let parent = node;
    let possibleNext;
    
    while (parent) {
      if (parent.val > node.val) {
        possibleNext = parent;
        break;
      }
      parent = parent.parent
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


