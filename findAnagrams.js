/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. 
 */

 var findAnagrams = function (str) {
    var unique = {};
    
    var solution = function(anagram, string) {
        
        if(string === '') {
            unique[anagram] = true;
        }

        for(var i = 0; i < string.length; i ++) {
            solution(anagram + string[i], string.substring(0,i) + string.substring(i + 1));
        }
    };
    
    solution('', str);

    return Object.keys(unique);
 };
