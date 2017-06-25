/**
 * Design and implement a TwoSum class. It should support the following operations: add and find.
 * 
 * add - Add the number to an internal data structure.
 * find - Find if there exists any pair of numbers which sum is equal to the value.
 * 
 * For example,
 * add(1); add(3); add(5);
 * find(4) -> true
 * find(7) -> false
 */

/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.memo = new Set();
    this.available = new Map();
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    if (this.available.has(number)) {
        this.available.set(number, this.available.get(number) + 1);
    } else {
        this.available.set(number, 1);
    }
    
    this.available.forEach((count, num) => {
        if (num === number && count > 1) {
            this.memo.add(number + number);
        } else if (num !== number) {
            this.memo.add(num + number);
        }
    });
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    console.log('memo', this.memo);
    return this.memo.has(value);
};

let test = new TwoSum();

test.add(0);

console.log(test.find(0));
