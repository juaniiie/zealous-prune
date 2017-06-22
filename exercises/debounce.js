/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed
 * since the last time the debounced function was invoked.
 * 
 * clearTimeOut --> prevents the function set with the setTimeout() to execute, takes in one paramenter, the
 * time stamp that setTimeout returns
 * 
 * setTimeOut --> calls a function or evaluates an expression after a specified number of milliseconds. Returns a Number,
 * representing the ID value of the timer that is set. Use this value with the clearTimeout() method to cancel the timer
 */

function debounce(fn, delay) {
    let timer = null;

    return function() {
        let context = this;

        let args = arguments;

        clearTimeout(timer);

        timer = setTimeout(function() {
          fn.apply(context, args);
        }, delay);
    }
}

function foo(question) {
    console.log('hi,' + question);
}

debounce(foo, 200)('are you out there?');