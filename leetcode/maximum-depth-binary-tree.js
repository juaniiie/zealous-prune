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
        
        var left = findDepth(node.left, depth + 1);
        
        var right = findDepth(node.right, depth + 1);

        if (left === undefined) {
            left = 0;
        }
        if (right === undefined) {
            right = 0;
        }
        
        var depths = Math.max(left, right);

        depthMax = Math.max(depthMax, depths);

    };

    findDepth(root, 0);

    return depthMax;
  
};
