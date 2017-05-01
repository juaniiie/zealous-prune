/*
What is the largest palindrome made from the product of two 3-digit numbers?
*/
var reverse = function(str) {
    var modStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        modStr += str[i];
    }
    return modStr;
};

var checkPal = function(num) {
    num = String(num);
    var num2 = reverse(num);

    return num === num2;
};

var threeDigPal = function() {
    var max = 0;
    var num = 0;
    for (var i = 999; i > 100; i--) {
        for (var j = i; j > 100; j--) {
            num = i * j;
            if (num > max && checkPal(num)) {
                max = num;
            }
        }
    }
    return max;
};

/*
Answer is 906609.
*/