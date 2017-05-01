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
// Have to find the max and min depth, if the difference is > 1
// then tree is not balanced
// my solution was simply finding the depth of the left and right subtree
// individualy: see below:
function findHeight(node) {
    if (node === null) {
        return 0;
    }

    let left = findHeight(node.right);
    let right = findHeight(node.left);
    return Math.max(left, right) + 1;
}

function isBalanced(tree) {
  if (!tree || !tree.root) {
    return true;
  }

  let leftHeight = findHeight(tree.root.left);
  let rightHeight = findHeight(tree.root.right);

  return Math.abs(leftHeight - rightHeight) <= 1;
}


// more complete solution
// time O(N)
// space O(log N)
function isBalanced(tree) {
  if (!tree || !tree.root) {
    return true;
  }

  let node = tree.root,
    cache = {
      min: Number.MAX_SAFE_INTEGER,
      max: Number.MIN_SAFE_INTEGER
    };

  findDepth(cache, node, 0);
  return cache.max - cache.min <= 1;
}

function findDepth(cache, node, depth) {
  if (!node) {
    if (depth < cache.min) {
      cache.min = depth;
    }
    if (depth > cache.max) {
      cache.max = depth;
    }
  } else {
    findDepth(cache, node.left, depth + 1);
    findDepth(cache, node.right, depth + 1);
  }
}