function zeroMatrix(matrix) {
    if (matrix.length === 0) {
        throw 'Error'
    }
    let columnIndexs = new Set();

    for (let y = 0; y < matrix.length; y++ ) {
        let rowZero = false;

        for (let x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] === 0) {
                rowZero = true;
                columnIndexs.add(x);
            }
        }

        // should happen after have looped through whole row
        if (rowZero) {
            for (let i = 0; i < matrix[y].length; i++) {
                matrix[y][i] = 0;
            }
        }
    }

    // go through matrix one more time to zero columns
    if (columnIndexs.size > 0) {
        for (let z = 0; z < matrix.length; z++ ) {
            for (let m = 0; m < matrix[z].length; m++) {
                if (columnIndexs.has(m)) {
                    matrix[z][m] = 0;
                }
            }

        }
    }

    return matrix;

}

let sample = [
          [ 1,  2,  3,  4],
          [ 5,  6,  7,  8],
          [ 9,  0, 11, 12],
          [13, 14, 15,  0],
          [17, 18, 19, 20]
        ];

zeroMatrix(sample);
