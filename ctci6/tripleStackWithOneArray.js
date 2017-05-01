/**
 * must have methods push,
 * pop and peek
 * 
 * Work in Progress
 */

class TrippleStack {
    constructor() {
        this.arrayLastIndexes = {
            1: 0,
            2: 1,
            3: 2
        };
        this.storageArray = [null, null, null];
    }

    moveIndexesUpOne(stack) {
        for (let i = stack; i <= 3; i++) {
            this.arrayLastIndexes[i] = this.arrayLastIndexes[i] + 1;
        }
    }

    moveIndexesDownOne(stack) {
        for (let i = stack; i <= 3; i++) {
            this.arrayLastIndexes[i] = this.arrayLastIndexes[i] - 1;
        }
    }

    push(stack, value) {
        let lastIndex = this.arrayLastIndexes[stack];
        if (this.storageArray[lastIndex] === null) {
            this.storageArray[lastIndex] = value;
        } else {
            this.storageArray.splice(lastIndex + 1, 0, value);
            this.moveIndexesUpOne(stack);
        }
        // console.log('this.storage array after push', this.storageArray);
        // console.log('index object after push', this.arrayLastIndexes);
    }

    pop(stack) {
        let lastIndex = this.arrayLastIndexes[stack];
        if (this.storageArray[lastIndex] === null) {
            // console.log('null at pop');
            return null;
        } else {
            let value = this.storageArray[lastIndex];
            this.storageArray.splice(lastIndex, 1);
            this.moveIndexesDownOne(stack);
            // console.log('array after pop', this.storageArray);
            // console.log('popped value', value);
            // console.log('indexes after pop', this.arrayLastIndexes);
            return value;
        }
    }

    // should return the top of the stack
    peek(stack) {
        let index = this.arrayLastIndexes[stack]
        return this.storageArray[index];
    }

    isEmpty(stack) {
        //console.log('is stack', stack, ' emptty?', this.storageArray[this.arrayLastIndexes[stack]] === null);
        return this.storageArray[this.arrayLastIndexes[stack]] === null;
    }
}

// check;
let tripple = new TrippleStack();
 tripple.push(1, 'one');
 tripple.push(1, 'uno');
 tripple.isEmpty(2);
 tripple.push(2, 'two');
 tripple.push(3, 'three');
 tripple.push(2, 'dos');
 tripple.isEmpty(2);
 tripple.push(3, 'tres');
 tripple.pop(1);
