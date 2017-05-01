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

///solutions
// time = O(N)
// space = O(1)

export function findStartOfLoop(list) {
    if (!list) {
        return null;
    }

    let slow = list;
    let fast = list;

    while(slow.next && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }

    if(!slow || slow !== fast) {
        return null;
    }

    slow = list;

    while(slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return fast;
}


// make test list

let loopList = createLinkedList();
push(loopList, 1, 2, 3, 4, 5, 6);
let node = loopList.head.next.next.next;
loopList.tail.next = node;

findStartOfLoop(loopList.head);