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
 * Solution if access to parent
 */
function findFirstCommonAnscestor(node1, node2) {
    if (!node1 || !node2) {
        throw new Error('must be valid nodes');
    }
    if (node1 === node2) {
        return node1;
    }

    let node1Depth = findDepthFromBottom(0, node1);
    let node2Depth = findDepthFromBottom(0, node2);

    console.log('cache1', node1Depth);
    console.log('cache2', node2Depth);

}


function findDepthFromBottom(depth, node) {
  console.log('node', node ? node.val : null);
  console.log('depth', depth);
  if (!node) {
    return depth;
  } else {
    return Math.max(findDepthFromBottom(depth + 1, node.left), findDepthFromBottom(depth + 1, node.right));
  }
}


let tree = new Tree();

[8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach(v => tree.add(v));

let nodeA = tree.root.left.left.left; //1
let nodeB = tree.root.left.right; //6

findFirstCommonAnscestor(nodeA, nodeB);