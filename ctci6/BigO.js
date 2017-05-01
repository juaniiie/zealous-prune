/** 

O Log N

When you see a problem where the number of elements in the problem space gets halved each time, 
that will likely be O(log N) runtime

example: binary search

**/


/** 

Runtime for recursive funtions: O(branches^depth)

When you have a resursive function that makes multiple calls, the runtime will often (but not always)
look like O(branches ^depth), where branches is the number of times each recursive call branches.
In the case below gives us O(2^N)
                                  R(4) 
                              /         \ 
                             /           \ 
                            /             \ 
                           /               \ 
                          /                 \ 
                       R(3)                 R(3) 
                       /  \                 /  \ 
                      /    \               /    \ 
                     /      \             /      \ 
                    /        \           /        \ 
                   /          \         /          \ 
                 R(2)        R(2)    R(2)         R(2) 
                 /\           /\       |  \       | \ 
                /  \         /  \      |   \      |  \ 
               /    \       /    \     |    \     |   \ 
              /      \     /      \    |     \    |    \ 
             R(1)   R(1)  R(1)   R(1) R(1)   R(1) R(1) R(1)  
**/

function R(n) {
    if (n <= 0) {
        return 1;
    }
    return R(n-1) + R(n-1);
}


/** 

Sum of powers of 2

"The sum of a sequence of powers of two is roughly equal to the next value in the sequence"

example: 2^0 + 2^1 + 2^2 + 2^3 + 2^4 = 31 = 2^5 -1 ~ 2^5

**/


/* 
Sum of integers 1 through N

the sum = N(N+1)/2

**To come up with this remember pairing off and adding pairs

This resoning comes up alot in nested loops 

*/

// Practice Problems ////////////////////

/*1*/

function foo(array) {
  var sum = 0;
  var product = 1;

  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  for (var j= 0; j < array.length; j++) {
    product *= array[i];
  }
  console.log(sum + ',' + product);
}

/* TC: O(N)
Iterating throught the array twice doesnt matter */

/*2*/

function printPairs(array) {
  for(var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      console.log(array[i]+ ',' + array[j]);
    }
  }
}

/* TC: O(N^2) */

/*3*/

function printUnorderedPairs(array) {
  for(var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      console.log(array[i]+ ',' + array[j]);
    }
  }
}

/* TC: O(N^2)

Conceptually:
On the first iteration of the outer for loop, the inner for loop
iterates n-1 times. On the second iteration of out outer for loop,
the inner for loop iterates n-2 times. Next, n-3, then n-4, and so on.
There are n(n-1)/2 total iterations of the inner for loop. Therefore,
this code takes O(n^2)

Visually:
The code iterates thorugh the following (i,j) pairs whrn N = 5
(0,1) (0,2) (0,3) (0,4)
      (1,2) (1,3) (1,4)
            (2,3) (2,4)
                  (3,4)
This looks like half of the NxN matrix, which has size (roughly) N^2/2.
Therefore is takes O(N^2) time
*/


/*4*/

function printOutUnorderedPairs(arrayA, arrayB) {
  for(var i = 0; i < arrayA.length; i++) {
    for (var j = 0; j < arrayB.length; j++) {
      if (arrayA[i] > arrayB[j]) {
        console.log(arrayA[i]+ ',' + array[j]);
      }
    }
  }
}

/* TC: O(AB), where A = arrayA.length and B = arrayB.length
The if-statement within j's for loop is O(1) time since it's just a sequence of constant-time statements
*/

/*5*/

function printOutUnorderedPairs(arrayA, arrayB) {
  for(var i = 0; i < arrayA.length; i++) {
    for (var j = 0; j < arrayB.length; j++) {
      for (var k = 0; k < 100000; k++) {
        console.log(arrayA[i] + ',' + arrayB[j]);
      }
    }
  }
}

/* TC: O(AB); same reasoning as above
100,00 units of work is still constant, so the runtime is the same
*/

/*6*/
//This function reverses an array

function reverse(array) {
  for (var i = 0; i < array.length/2; i++) {
    var other = array.length - i - 1;
    var temp = array[i];
    array[i] = array[other];
    array[other] = temp;
  }
}

/* TC: O(N)
The fact that it only goes through half of the array (in terms of iterations) does not impact the
big O time.
*/


/*7
Which ones of the following are equivalent to O(N)? Why?

O(N + P), where P < N/2
** Yes, bc P is less than N/2 so it is insignificant, drop non-dominant terms

O(2N)
**Yes, bc should drop constants

O(N + log N)
**Yes, drop non-dominant terms (logN is very small)

O(N + M)
**No, we dont know of any relationship between N and M, so cannot drop or combine

*/


/*8
Suppose we had an algorithm that took an array of strings, sorted each string, and then sorted the full array.
What would the runtime be?

s = length of longest string
a = length of array

I. sorting each string is O(s log s) 
II. have to do this for every string so mulitply by number of strings (which is a) = O(a*s log s)
III. Need to compare all the strings when sorting them and this takes O(s)
IV. There are O(a log a) comparisons
V. Therefore sorting the array of string will take O(s*a log a)
VI. Add up these two parts === O(a*s(log a + log s))

*/


/*9
The following code sums up the values of all the nodes in a balanced binary search tree.
*/

function sum(Node) {
  if (node === null) {
    return 0;
  }
  return sum(node.left) + node.value + sum(node.right);
}

/* TC: O(N)
The code touches each node inthe tree once and does a constant time amount of work with each 'touch' (excluding recursive calls)
Therefore the runtime will be linear in terms of the number of nodes.

O(branches^depth) so this would be O(2^depth)
because binary three depth is ~~ log N, now we have O(2^log N)

Let     P = 2^logN
    log P = log N
        P = N
        N = 2^ log N
*/


/*10
The following checks if a number is prime by checking for divisibility on numbers less than it.
It only needs to go up the square root of n because if n is divisible  by a number greater than its quare root,
then its divisible by something smaller than it
*/

function isPrime(n) {
  for (var x = 2; x * x <= n; x++) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
}

/* TC: O(squrt(N)
Loop starts from 2 and stops when x = sqrt(n)
*/

/*11
The following code computes n!
*/

function factorial(n) {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

/* TC: O(N)
Straight recursion from n to n-1 to n-2 down to 1. 
*/

/*12
The following code prints all permutations of a string
*/

function permutation(str) {
  permutation(str, '');
}

function permutation(str, prefix) {
  if (str.length === 0) {
    console.log(prefix);
  } else {
    for (var i = 0; i < str.length; i++) {
      var remainder = str.substring(0, i) + str.substring(i+1);
      permutation(remainder, prefix + str.charAt(i));
    }
  }
}
/* TC: O(n!)
If we were to generate a permutation, then we would need to pick a character for each 'slot'.
If we have 3 letters. In the first slot we have 3 choices, in the second we have 2, and in the last we
have one. 3*2*1 or 3!
Other way to think about it: looking at the code, in the first permutation we have n characters and
it makes n recursive calls. In the next level we have n-1 recursive calls. This is n-1 for each of the
n calls. Then we have n-2 for each of the n-1. So this = n * n-1 * n-2 .... 1 which is n!
*/


/*13
The following code computes nth Fibonacci number
*/

function fib(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n -1) + fib(n - 2);
    }
}

/* TC: O(2^N)
Using the established pattern for recursive calls O(Branches^depth). There are 2 branches per call,
and we go as deep as N, therefore the runtime is O(2^N). 
More accurately, it is O(1.6^N). This is because at the bottom of the stack, there is sometimes only
one call. Most nodes are at the bottom of the tree, so this sigle vs double call
actually makes a big difference. 
Generally speaking, when you see an algorithm with multiple recursive calls, you're looking at 
exponential runtime.
*/

/*14
The following code prints all Fibonacci numbers from 0 to n.
*/

function fib(n) {
    if (n  <= 0) {
        return 0;
    } else if ( n === 1) {
        return 1;
    } else {
        return fib(n-1) + fin(n-2);
    }
}

function allFib(n) {
    for (var i = 0 ; i < n ; i++) {
        console.log(i + ':' + fib(i));
    }
}

/* TC: O(2^n)
n is changing, fib(n) takes O(2^n) time, bit it mattters what the value of n is. 
Each call goes: 2^1, 2^2.. 2^n. So if you add these you get the total amount of work. Sum of
powers of two tells us that this equal 2^n+1 and if we drop the 1 (constant). Then we get 2^n
*/

/*15
The following code prints all Fibonacci numbers from 0 to n. But this time, it stores (caches) previously
computed values in an integer array. If it has been computed, it just returns the cache. 
*/

function fib(n, memo) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else if (memo[n] > 0) {
        return memo[n];
    } else {
        memo[n] = fib(n-1, memo) + fib(n-2, memo);
        return memo[n];
    }
}

function allFib(n) {
    var memo = [];
    for (var i = 0; i < n ; i++) {
        console.log(i + ':' + fib(i, memo));
    }
}

/* TC: O(n)
At each call to fib(i), we already computed and store the values of fib(i-1) and fib(i-2)
We just look up those values, sum them, store the new result, and return. This takes a constant
amount of time.  We're doing a constant amount of work N times so this is O(N) time.
*/

/*16
The following code prints the powers of 2 from 1 through n (inclusive). For example, if n is 4,
it would print 1,2,4. 
*/

function powersof2(n) {
    if (n < 1) {
        return 0;
    } else if (n === 1) {
        console.log(1);
        return 1;
    } else {
        var prev = powersof2(n/2);
        var curr = prev*2;
        console.log(curr);
        return curr;
    }
}

// my algo
var pwrs2 = function(n) {
    var powers = [n];
    while (n >  1) {
        n = n/2;
        powers.push(n);
    }
    return powers.reverse();
};
//

/* TC: O(log n)
The number of times we can divide n by to get down to base case 1. Or the number of times
we can halve n until we get 1 is O(log n)
*/

//ADDITIONAL PROBLEMS

/*1
Computes the product of a and b
*/
function product(a, b) {
    var sum = 0;
    for (var i = 0; i < b; i++) {
        sum += a;
    }
    return sum;
}
/* TC: O(b)
The for loop just iterates through b
*/


/*2
Computes a^b
*/
function power(a, b) {
    if (b < 0) {
        return 0;
    } else if (b === 0) {
        return 1;
    } else {
        return a * power(a, b-1);
    }
}
/* TC: O(b)
The recursive code iterates though b calls, since it subtracts one at each level.
*/

/*3
Computes a % b
*/

// not sure if this algorithm is correct
function mod(a, b) {
    if (b < 0) {
        return -1;
    }
    var div = a/b;
    return a - div * b; 
}
/* TC: O(1)
*/

/*4
Performs integer division. Assume a and b are both positive
*/

function div(a, b) {
    var count = 0;
    var sum = b;
    while (sum <= a) {
        sum += b;
        count++;
    }
    return count;
}
/* TC: O(a/b)
The variable count will eventually equal a/b. The while loop iterates count times.
Therefore it iterates a/b times.
*/

/*5
The following computes the integer square root of a number. If the number is not a perfect square
(there is no integer root), then it returns -1. It does this by successive guessing. If n is 100,
it first guesses 50. Too high? Try something lower - halfway between 1 and 50. 
*/
function sqrt_helper(n, min, max) {
    if (max < min) {
        return -1; // no square root
    }
    var guess = (min + max) / 2;
    if (guess * guess === n) {
        return guess; // found it
    } else if (guess * guess < n) { // too low
        return sqrt_helper(n, guess + 1, max); //try higher
    } else {
        return sqrt_helper(n, min, guess - 1); //try lower
    }
}

function sqrt(n) {
    return sqrt_helper(n, 1, n);
}
/* TC: O(log n)
This is essentially doing a binary search to find the square root.
*/


/*6
The following computes the integer square root of a number if the number is not 
a perfect square, there is no integer square root, then it returns -1. It does
this by trying increasingly large numbers until it finds the right value (or is too high).
*/

function sqrt(n) {
    for (var guess = 1; guess * guess <= n; guess ++) {
        if (guess * guess === n) {
            return guess;
        }
    }
    return -1;
}
/* TC: O(sqrt(n))
Stright loop that stops when guess is <= sqrt(n)
*/


/*7
If a binary tree is not balanced, how long might it take (worst case) to find an 
element in it?
*/

/* TC: O(N), where N is the number of nodes 
Essentially, the tree would have one branch with all nodes on it (it would be like a list)
*/

/*8
You are looking for a specific value in a binary tree, bit the tree is not a binary search tree.
(Means that the tree is not ordered);
*/

/* TC: O(N)
Worst case scenario is that you would have to visit every node before finding 
the one you are looking for
*/


/*9
The appendToNew method appends a value to an array by creating a new, longer array and returning this
longer array. You've used the appendToNew method to create a copyArray function that repeatedly calls
calls appendToNew. How long does cpying an array take?
*/
function appendToNew(array, value) {
    //copy all elements over to new array
    var bigger = []; // new array with length = to array.length + 1
    for (var i = 0; i < array.length; i++) {
        bigger[i] = array[i];
    }

    // add new element
    bigger[bigger.lenght - 1] = value;
    return bigger;
}

function copyArray(array) {
    var copy = [];
    for (var y = 0; y < array.length; y++) {
        var value = y[i];
        copy = appendToNew(copy, value);
    }
}

/* TC: O(N^2)
Where n is the number of elements in the array. The first call to appendToNew takes 1 copy. The
second call takes 2 copies. The third makes 3 copies. And so on. The total time will be 
the sum of 1 through n, which is O(n^2). 
*/

/*10
The following code sums up the digits in a number
*/
function sumDigits(n) {
    var sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

/* TC: O(log N). The runtime will be the number of digits in the number. A number with d digits can have a value
up to 10^d. If n = 10^d, the d = log n
*/


/*11
The following code prints all strings of length k where the characters are in sorted order. It does this
by generating all string of length k and then checking if each is sorted. What is its
runtime?
*/
var numChars = 26;

function ithLetter(i) {
    return (char) (((int) + 'a') + i);
}

function isInOrder(s) {
    for (var i = 1; i < s.length; i++) {
        var prev = ithLetter(s.charAt(i - 1));
        var curr = ithLetter(s.charAt(i));
        if (prev > curr) {
            return false;
        }
    }
    return true;
}

function printSortedStrings(remaining, prefix) {
    if (remaining === 0) {
        if (isInOrder(prefix)) {
            console.log(prefix);
        }
    } else {
        for (var i = 0; i < numChars; i++) {
            var c = ithLetter(i);
            printSortedStrings(remaining - 1, prefix + c);
        }
    }
}

function printSortedStrings(remaining) {
    printSortedStrings(remaining, '');
}

/* TC: O(kc^k)
Where k is the length of the string and c is the number of charactersin the alphabet. It takes O(c^k) time to generate each string.
Then we need to check that each of these is sorted, which takes O(k) time.
*/

/*12
The following code computes the intersection (the number of elements in common) of two arrays.
It assumes that neither array has duplicates. It computes the intersection by sorting one array (array b)
and then iterating through array a checking (via binary search) if each value is in b.
*/
function intersection(arrayA, arrayB) {
    mergesort(b); // O(b log b), where b is the length of arrayB
    var intersect = 0;
    for (var i = 0; i , arrayA.length; i++) { // O(a), where a is length of arrayA
        var x = arrayA[i];
        if (binarySearch(b, x) >= 0) { //binary search O(log b)
            intersect++;
        }
    }
    return intersect;
}

/* TC: O(b log b + (a * log b))
*/
