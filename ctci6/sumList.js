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
// time: O(N) .. N is length of longest node
// space O(N);

function sumListsReverseOrder(list1, list2) {
  let list1Length = getLength(list1);
  let list2Length = getLength(list2);
  let longest;
  let shortest;
  if (list1Length === list2Length) {
    longest = list1;
    shortest = list2;
  } else {
    longest = list1Length > list2Length ? list1 : list2;
    shortest = list1Length < list2Length ? list1 : list2;
    
  }

  let longNode = longest;
  let shortNode = shortest;
  let result = null;
  let resultCurrentNode;

  function addNodeToResult(value) {
      if (!result) {
          result = { val: value, next: null };
          resultCurrentNode = result;
      } else {
          resultCurrentNode.next = { val: value, next: null };
          resultCurrentNode = resultCurrentNode.next;
      }
  }
  let carryOver = 0;
  
  while (longNode) {
    if (!shortNode) {
      shortNode = { val: 0, next: null };
    }
    let addition = carryOver > 0 ? carryOver + longNode.val + shortNode.val : longNode.val + shortNode.val;
    let resultVal = addition;

    if (addition >= 10) {
        resultVal = addition % 10;
        carryOver = (addition - resultVal)/10;
    } else {
      carryOver = 0;
    }

    addNodeToResult(resultVal);
    longNode = longNode.next;
    shortNode = shortNode.next;

    if (!longNode) {
      if (carryOver > 0) {
        addNodeToResult(carryOver);
      }
    } 
  }

  //console.log('result', linkedListToArray(result));
  return result;
}

let testL1 = arrayToLinkedList([2, 9]);
let testL2 = arrayToLinkedList([4, 9, 9, 9, 9, 9, 9]);

sumListsReverseOrder(testL1, testL2);


// for summing no reserse