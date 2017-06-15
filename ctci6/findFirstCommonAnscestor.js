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
 * Steps:
 * 1. Find distance from bottom of tree for both nodes
 * 2. If different, advance lower node to same level as higher node
 * 3. Go up the tree (to each node's parent), to find where they equal
 * 
 * Time: O(lg N) - assumes balanced tree, worst case O(N) 
 * Space: O(1) 
 */
function findFirstCommonAnscestor(node1, node2) {
    if (!node1 || !node2) {
        throw new Error('must be valid nodes');
    }
    if (node1 === node2) {
      // console.log('parent at check: ', node1.val);
        return node1.val;
    }

    let node1Depth = findDepthFromBottom(0, node1);
    let node2Depth = findDepthFromBottom(0, node2);

    if (node1Depth > node2Depth) {
      for (var i = 0; i < node1Depth - node2Depth; i++) {
        node2 = node2.parent;
      }
    } else if (node1Depth < node2Depth) {
      for (var j = 0; j < node2Depth - node1Depth; j++) {
        node1 = node1.parent;
      }
    }

    let parent;
    while (parent === undefined) {
      if (node1 === node2) {
        parent = node1;
      }
      node1 = node1.parent;
      node2 = node2.parent;

    }
 
    return parent.val; 
}


function findDepthFromBottom(depth, node) {
  if (!node) {
    return depth;
  } else {
    return Math.max(findDepthFromBottom(depth + 1, node.left), findDepthFromBottom(depth + 1, node.right));
  }
}

// Test cases

let tree = new Tree();

// [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach(v => tree.add(v));
[10, 9, 11].forEach(v => tree.add(v));

let nodeA = tree.root.left;
let nodeB = tree.root;

findFirstCommonAnscestor(nodeA, nodeB);