// Checks if word2 is a substring of word2
// Returns boolean
function isSubstring(word1, word2) {
    return word1.includes(word2);
}

// Checks if s2 is a rotated version of s1
// returns boolean
// spaces dont matter
function isRotatedSubstring(s1, s2) {
    if (!s1 || !s2) {
        //console.log('thowring erros');
        throw new Error('invalid input');
    }
    s1 = s1.split(' ').join('');
    s2 = s2.split(' ').join('');

    if (s1.length !== s2.length) {
        //console.log('returning false');
        return false;
    }
    
    let firstCharIndex = s2.indexOf(s1[0]);
    let start = firstCharIndex;
    let j = 0;
    for (let i = start; i < s2.length; i++) {
        //console.log('in for loop');
        if (s2[i] === s1[j]) {
            if (s2[i] === s1[0]) {
                firstCharIndex = i;
            }
            j++;
        } else {
            j = 0;
        }
    }

    //console.log('final index of start', firstCharIndex);
    let sub = s2.substring(0, firstCharIndex);
    //console.log('conclusion', isSubstring(s1, sub));
    return isSubstring(s1, sub);
}

let str1 = 'b c d e f g h i j k l m n o p q r s t u v x y z 0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Za';
let str2 = 'a b c d e f g h i j k l m n o p q r s t u v x y z 0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';

isRotatedSubstring(str1, str2);
