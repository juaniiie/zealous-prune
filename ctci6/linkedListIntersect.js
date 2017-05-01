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

/// solution
// time O(N), n is length of longest node
// space O(n), set size depends on list1 length 

function doIntersect(list1, list2) {
    let values = new Set();
    let node1 = list1;
    let node2 = list2;

    if (node1 === node2) {
        return node1;
    }

    function findNodeWithValue(value) {
        let pointer = list1;
        while (pointer) {
            if(pointer.next.val === value) {
                break;
            }
            pointer = pointer.next;
        }
        //console.log('pointer', pointer);
        return pointer;
    }

    while(node1) {
        //console.log('adding value', node1.val);
        values.add(node1.val);
        node1 = node1.next;
    } 

    while(node2 && node2.next) {
        //console.log('second while loop');
        if (values.has(node2.next.val)) {
            //console.log('values has a repeat value', node2.next.val);
            let target = findNodeWithValue(node2.next.val);
            //console.log('target', target);
            if (node2.next === target.next) {
              //console.log('list intersects at node====', node2.next);
              return node2.next;
            }
        }
        node2 = node2.next;
    }
    console.log('do not intersect===========================');
}

let common = {
    val: 7,
    next: {
        val: 2,
        next: {
            val: 1,
            next: null
        }
    }
}


 let one = {
     val: 3,
     next: {
         val: 1,
         next: {
             val: 5,
             next: {
                 val: 9,
                 next: null
             }
         }
     }
 }

let two = {
    val: 4,
    next: {
        val: 6,
        next: null
    }
}

doIntersect(one, two);
    