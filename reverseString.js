/*
What are three ways to reverse a string?
*/

var reverse1 = function(str) {
    var newString = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
};

var reverse2 = function(str) {
    return str.split('').reverse().join('');
};