/**
Input: number of rounds
Output: Outcomes array with possible outcomes arrays within it
*/


 var rPS = function(n) {
    var hand = ['R', 'P', 'S'];
    var outcomes = [];
    var r = [];
    
    (function game(n) {
        if (n === 0) {
            var copy = r.slice();
            outcomes.push(copy);
            return;
        }

        for(var i = 0; i < hand.length; i ++) {
            r = r.concat(hand[i]);
            game(n-1);
            r.pop();
        }
    })(n);

    return outcomes;
 };