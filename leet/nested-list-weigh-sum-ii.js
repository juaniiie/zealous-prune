var depthSumInverse = function(nestedList) {
 
    function getMaxDepth(list, depth) {
        let maxDepth = depth;
     
        for(var i = 0; i < list.length; i++) {
            if(!list[i].isInteger()) {
                maxDepth = Math.max(maxDepth, getMaxDepth(list[i].getList(), depth + 1));
            }
        }   
        return maxDepth;
    }
 
    let level = getMaxDepth(nestedList, 1);
    let sum = 0;
 
    function findSum(list, depth) {
        for (var j = 0; j < list.length; j++) {
            if (!list[j].isInteger()) {
                findSum(list[j].getList(), depth - 1);
            } else {
                sum += list[j].getInteger()*depth;
            }
        }
    }
 
    findSum(nestedList, level);
    
    return sum;
};
