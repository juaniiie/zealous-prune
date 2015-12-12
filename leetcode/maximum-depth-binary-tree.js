/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 //Given a binary tree, find its maximum length

var maxDepth = function(root) {
    
    var depthMax = 0;

    var findDepth = function(node, depth) {
        
        if (node === null) {
           return depth;
        }
        
        if (node.left) {
            findDepth(node.left, depth + 1);
        }
        
        if (node.right) {
            findDepth(node.right, depth + 1);
        }

        depthMax = Math.max(depthMax, depth);

    };

    findDepth(root, 1);

    return depthMax;
  
};
