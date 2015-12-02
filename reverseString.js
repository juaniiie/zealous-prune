/*
What are three ways to reverse a string?
*/

var reverse1 = function(str) {
    var newString = '';
    for (var i = 0; i < str.length; i++) {
        newString += str[i];
    }
    return newString;
};
