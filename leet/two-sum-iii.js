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
    this.memo = {};
    this.set = {};
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    console.log('calling addwith', number);
    if (!this.set.hasOwnProperty(number)) {
        this.set[number] = true;
    }

    for(let num in this.set) {
        num = Number(num);
        if (num !== number) {
            this.memo[num + number] = true;
        }
    }
    console.log('memo', this.memo);
    console.log('set', this.set);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    console.log('this.set', this.set);
    console.log('this.memo', this.memo);
    return this.memo.hasOwnProperty(value);
};

let test = new TwoSum();

test.add(1);
test.add(3);
test.add(5);

console.log(test.find(7));