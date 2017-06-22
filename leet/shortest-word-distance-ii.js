/**
 * @param {string[]} words
 */
var WordDistance = function(words) {
    this.indexes = {};
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        this.indexes[word] = this.indexes[word] || [];
        this.indexes[word].push(i);
    } 
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let minDistance = Number.MAX_SAFE_INTEGER;
    let word1Indexes = this.indexes[word1];
    let word2Indexes = this.indexes[word2];

    let i = 0;
    let j = 0;

    while (i < word1Indexes.length && j < word2Indexes.length) {
        let i1 = word1Indexes[i];
        let i2 = word2Indexes[j];

        minDistance = Math.min(minDistance, Math.abs(i1 - i2));

        if (i1 < i2) {
            i++;
        } else {
            j++;
        }
    }
    return minDistance;
};

["practice","makes","perfect","coding","makes"],["coding","practice"],["makes","coding"]

let obf = new WordDistance(["practice","makes","perfect","coding","makes"]);
console.log(obf.shortest('makes', 'coding'));

