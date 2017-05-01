//cords = [y, x]

let _moves = {
  right: {name: 'right', cordinates: function(cords) { return [cords[0], cords[1] + 1];}, next: 'down', current: true},
  down: {name: 'down', cordinates: function(cords) { return [cords[0] + 1, cords[1]]; }, next: 'left', current: false},
  left: {name: 'left', cordinates: function(cords) { return [cords[0], cords[1] - 1]; }, next: 'up', current: false},
  up: {name: 'up', cordinates: function(cords) { return [cords[0] - 1, cords[1]];}, next: 'right', current: false}
};

function resetDirectionToRight() {
    for (let move of Object.keys(_moves)) {
        if (_moves[move].current && move !== 'right') {
            move.current = false;
        } else if (move === 'right') {
            move.current = true;
        }
    }
}

function findCurrentDirection() {
  let current = '';
  for (let move of Object.keys(_moves)) {
    if (_moves[move].current) {
      current = move;
    }
  }
  return current;
}

function updateCurrentToNext(direction) {
  let c = findCurrentDirection();
  _moves[c].current = false;
  let next = _moves[c].next;
  _moves[next].current = true;
  
}

function isInBounds(cords, limits) {
    let lowLimit = limits[0];
    let highLimit = limits[1];
    // mLength = 3
    let y = cords[0]; //1
    let x = cords[1]; //4
    
    if (y < lowLimit || y > highLimit) {
      return false;
    } else if (x < lowLimit || x > highLimit) {
      return false;
    } else {
      return true;
    }
}

function findEndPosition(startingPosition, limits) {
    let direction = findCurrentDirection();
    //console.log('current direction', direction);
    let moves = limits[1] - limits[0];
    let currentPosition = startingPosition;

    while (moves > 0) {
        //console.log('moves', moves);
        let nextPosition = _moves[direction].cordinates(currentPosition);
        //console.log('next position after move', nextPosition);
        if (isInBounds(nextPosition, limits)) {
            //console.log('is in bounds');
            currentPosition = nextPosition;
            moves --;
        } else {
            //console.log('is not in bounds');
          updateCurrentToNext();
          direction = findCurrentDirection();
        }
    }

    return currentPosition;
}

function rotateOneOuter(matrix, startingPosition, limits) {
   //console.log('startingPosition', startingPosition);
   //console.log('limits', limits);

    let currentPosition = startingPosition;
    //console.log('first currentPosition', startingPosition);
  
    let currentValue = matrix[currentPosition[0]][currentPosition[1]];
    //console.log('currentValue', currentValue);
    
    for (let i = 0; i < 4; i++) {

        currentPosition = findEndPosition(currentPosition, limits);
        //console.log('end Position', currentPosition);

        let nextValue = matrix[currentPosition[0]][currentPosition[1]];
        //console.log('next value', nextValue);
           
        matrix[currentPosition[0]][currentPosition[1]] = currentValue;
        //console.log('matrix after swap', matrix);
        
        currentValue = nextValue;
        //console.log('current value after swap', currentValue);
    }

  // console.log('final matrix:');
  // console.log(matrix);
}

function rotateMatrix(matrix) {
    let even = matrix.length % 2;
    let leng = matrix.length;
    let x = 0;
    let y = 0;
    let limits = [0, matrix.length - 1];

    while (!even && limits[1] - limits[0] > 0 || even && limits[1] - limits[0] > 1) {
        // console.log('while loop with l value:', limits);
        // console.log('x value', x);
        // console.log('y value', y);
        resetDirectionToRight();
        for (x; x < limits[1]; x++) {
            //params are: matrix, startingPosition, limits
            rotateOneOuter(matrix, [y,x], limits);
        }

        y = y + 1;
        x = y;
        limits = [y, matrix.length - 2];
    }

    console.log('matrix', matrix);
    return matrix;

}

const matrixOne = 
[
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['K', 'L', 'M', 'N', 'O'],
  ['P', 'Q', 'R', 'S', 'T'],
  ['U', 'V', 'W', 'X', 'Y']
];

let m = [
          [13,  9,  5,  1],
          [14, 10,  6,  2],
          [15, 11,  7,  3],
          [16, 12,  8,  4]
        ];

let rorated = rotateMatrix(m);


