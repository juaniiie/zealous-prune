/**
 * input a sorted array
 * output a binary search three
 * 
 * time O(N log N) N is array length
 * space O(N) tree
 */
class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = this.right = null;
  }
}

class Tree {
    constructor() {
        this.root = null;
    }
    
    add (value) {
        let node = new TreeNode(value);
        if (!this.root) {
            this.root = node;
        } else {
            let currentNode = this.root
            let branch;
            
            while (currentNode) {
                branch = value < currentNode.val ? 'left' : 'right';
                if (!currentNode[branch]) {
                    break;
                }
                currentNode = currentNode[branch];
            }
            // node.parent = currentNode;
            currentNode[branch] = node;
        }
    }
}

function makeBalancedTree(array) {

    let tree = new Tree();

    function makeSubTree(array, tree) {
      
    //   console.log('array==>', array);

        if (array.length === 0) {
            return;
        }

        let middleIndex = Math.floor((array.length-1) / 2);
        // console.log('middle index', middleIndex);

         tree.add(array[middleIndex]);

         let left = array.slice(0, middleIndex);
         let right = array.slice(middleIndex+1);

         makeSubTree(left, tree);
        makeSubTree(right, tree);
    }
    
    if (array && array.length) {
      makeSubTree(array, tree);
    }

    return tree;
}


let testArray = [1,7,10,11,12,39,53,92,101];

makeBinarySearchTree(testArray);