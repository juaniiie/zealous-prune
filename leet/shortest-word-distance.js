/**
 * Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.
 * 
 * For example,
 * Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
 * 
 * Given word1 = “coding”, word2 = “practice”, return 3.
 * Given word1 = "makes", word2 = "coding", return 1.
 * 
 * Note:
 * You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
 */


/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    let minDistace = words.length;
    let indexes = {};
    indexes[word1] = [];
    indexes[word2] = [];

    function updateMin(value, wordKey) {
        let list = indexes[wordKey];
        list.forEach((int) => {
            minDistace = Math.min(minDistace, Math.abs(value - int));
        });
    }

    words.forEach((word, i) => {
        if (word === word1 || word === word2) {
            indexes[word].push(i);
            let target = word1 === word ? word2 : word1;
            updateMin(i, target);
        }
    }); 

    return minDistace; 
};


/**
 * Better solution
 */

var shortestDistance = function(words, word1, word2) {
    let minDistace = words.length;
    let word1Index = -1;
    let word2Index = -1;

    words.forEach((word, i) => {
        if (word === word1) {
            word1Index = i;
        }
        if (word === word2) {
            word2Index = i;
        }
        if (word1Index !== -1 && word2Index !== -1) {
            minDistace = Math.min(minDistace, Math.abs(word1Index - word2Index));
        }
    });

    return minDistace;
};
