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
// 
function isBST(tree) {
    if (!tree.root || !tree) {
        return false;
    }
    if (tree.root.left === null && tree.root.right === null) {
      return true;
    }
    
    let limits = {
      'leftMax': tree.root.val,
      'rightMax': tree.root.val,
    }
  
    function followsBSTRules(node, callback, limit) {
        if (node === null) {
            return true;
        }
        // is not less than or equal to current node val
        if (node.left && node.left.val > node.val) {
            return false;
        }
        // is not greater than
        if (node.right && node.right.val <= node.val) {
          return false;
        }
        
        callback(node.val, limits[limit]);

        return followsBSTRules(node.left, callback) && followsBSTRules(node.right, callback);
    }

    let leftComplies = followsBSTRules(tree.root.left, Math.max, 'leftMax');
    let rightComplies = followsBSTRules(tree.root.right, Math.min, 'rightMin');

    return (limits.leftMax < tree.root.val && leftComplies) && (limits.rightMin > tree.root.val && rightComplies);
}

let testTree = new Tree();

let treeArray = [100, 20, 10, 5, 1, 2, 3, 7, 8, 9, 15, 35, 25, 30, 45];

treeArray.forEach(function(v) {
  testTree.add(v);
});

isBST(testTree);
