function linkedListToArray(list) {
  let arr = [],
    node = list;

  while (node !== null) {
    arr.push(node.val);
    node = node.next;
  }

  return arr;
}

function createNode(val, next) {
  return {
    val: val,
    next: next || null
  };
}

function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }

  let list = null;
  for (let i = arr.length - 1; i >= 0; --i) {
    list = createNode(arr[i], list);
  }

  return list;
}

function getLength(list) {
  let length = 0;
  while (list) {
    list = list.next;
    ++length;
  }
  return length;
}

function createLinkedList() {
  return {
    head: null,
    tail: null
  };
}

function pushSingle(list, value) {
  let node = createNode(value);
  if (list.head) {
    list.tail.next = node;
    list.tail = node;
  }
  else {
    list.head = node;
    list.tail = node;
  }
}

function push(list) {
  for (let i = 1; i < arguments.length; ++i) {
    pushSingle(list, arguments[i]);
  }
}

// solution with stack
// time O(N)
// space O(N) stack is as big as list

function isPalindrome(list) {
    let stack = [];
    let node = list;
    
    //put all node 
    while(node) {
        stack.unshift(node.val);
        node = node.next;
    }

    // check if stack == node values
    let index = 0;
    let nodE = list;

    while (nodE) {      
        if (nodE.val !== stack[index]) {
            console.log('false');
            return false;
        }
        nodE = nodE.next;
        index++;
    }
    return true;
}

let testList = arrayToLinkedList([1, 2, 3, 2, 1, 1]);

isPalindrome(testList);

// recursive solution (possible)

// function linkedListPalindrome(list) {
//   let listLength = getLength(list);
//   let middle = Math.floor(listLength/2);

//   let node = list;

//   for (var i = 1; i <= middle; i++) {
//     node = node.next;
//   }

//   // if list odd delete middle node
//   if (length % 2 === 1) {
//     node.next = node.next.next;
//   }

//   if (node.val === node.next.val) {
//     node.val = node.next.next.val;
//     node.next = node.next.next.next
//   }



// }
