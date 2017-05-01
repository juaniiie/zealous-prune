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

// solution

function isBST(tree) {
    if (!tree.root || !tree) {
        return false;
    }

    let leftMax = tree.root.left.val;
    let rightMin = tree.root.right.val;

    let getMin = function(val1, val2) {
        return Math.min(val1, val2);
    }

    let getMax = function(val1, val2) {
        return Math.max(val1, val2);
    }

    function followsBSTRules(node, callback) {
        if (!node) {
            return true;
        }
        // is not less than or equal to current node val
        if (node.left.val > node.val && node.left.val !== node.val) {
            return false;
        }
        // is not greater than
        // fix this
        if (node.right.val < node.val && ) {

        }
    }
}