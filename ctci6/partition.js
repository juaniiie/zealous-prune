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

// solution
// time: O(N)
// space: O(1)

function partition(list, parti) {
    if (!list) {
        throw new Error('invalid list');
    }
    let current = list;
    let smallPointer = null;
    let largetPointer = null;
    let smallList = null;
    let largeList = null;

    function addToSmallList(node) {
        if (!smallList) {
            smallList = node;
        } else {
            smallPointer.next = node;
        }
    }

    function addToLargeList(node) {
        if (!largeList) {
            largeList = node;
        } else {
            largetPointer.next = node;
        }
    }

    while (current) {
        if (current.val < parti) {
            addToSmallList(current);
            smallPointer = current;
        } else if (current.val >= parti) {
            addToLargeList(current);
            largetPointer = current;
        }
        current = current.next;
    }

    if (!smallList) {
        return largeList;
    } else if (!largeList) {
        return smallList;
    } else {
        largetPointer.next = null;
        smallPointer.next = largeList
        list = smallList;
        return list;
    }
}

//let sampleListArray = [5, 8, 3, 2, 7, 1, 4, 9, 15, 30];
//let sampleList = arrayToLinkedList(sampleListArray);

//partition(sampleList, 7);

