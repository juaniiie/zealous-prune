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
Solution:
Time: O(N) where N is the number of nodes: visits everynode
Space: O(log N) because of recursion, O(N) is worst case
*/
function isBST(tree) {
    if (!tree) {
        throw new Error('invalid tree');
    }
    
    if (tree.root.left === null && tree.root.right === null) {
      return true;
    }
    
    let limits = {
      'leftMax': Number.MIN_VALUE,
      'rightMin': Number.MAX_VALUE,
    };
  
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
        
        limits[limit] = callback(node.val, limits[limit]);

        return followsBSTRules(node.left, callback, limit) && followsBSTRules(node.right, callback, limit);
    }

    let leftComplies = followsBSTRules(tree.root.left, Math.max, 'leftMax');
    let rightComplies = followsBSTRules(tree.root.right, Math.min, 'rightMin');

    return (limits.leftMax < tree.root.val && leftComplies) && (limits.rightMin > tree.root.val && rightComplies);
}
