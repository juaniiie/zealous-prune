/** 

HASH TABLES : DS that maps keys to values

Simple implemetation: Use an array of linked lists and a hash code function.
To insert a key
1. compute the key's hash code (ususally an int or long). Two different keys could have the same hash code
2. Map the hash code to anindex in the array
3. At this index, the is a linked list of keys and values. Store the key and value in this index

**/

/** 

ArrayList : An array like DS that offers dynamic resizing

In some languages, like Java, arrays are fixed length. The size is determined when you create the array.
An ArrayList is an array that resizes itself as needed while still providing O(1) access. A typical
implementation is when the array is full, the array doubles in size. Each doubling takes O(n) time, 
but happens so rarely that its amortized insertion time is still O(1).

**/


/** 

StringBuilder

imagine this string joining func:

String joingWords(String[] words) {
    String sentence = "";
    for (String w : words) {
        sentence = sentence + w;
    }
    return sentence
}

--> if words === 'words'
--> i = 0; w = 'w'
    --> sentence = "" + "w"
--> i = 1
    --> sentence = ("" + "w") + "o"

What is the TC?? n = number of strings, x = length of each string

NOTE: Strings are immutable, once created cannot be changed. StringBuilder can be changed after creation.

On each concatenation, a new copy of the string is created, and the two strings are copied over,
character by character. The first iteration requires us to copy x characters. The second iteration
requires copying 2x. The third iteration requires 3x, and so on. The total time therefore is
O(x + 2x + 3x + ... + nx). This reduces to O(xn^2).

StringBuilder can help avoid this problem. String Builder simply creates a resizable array of all
the strings, copying them back to a string only when necessary.

Ex:

String joinWords(String[] words) {
    StringBuilder sentence = new StringBuilder();
    for (String w : words) {
        sentence.append(w);
    }
    return sentence.toString();
}
**/