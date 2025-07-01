const fibonacci = function(a) {
    if (a < 0) {
        return "OOPS";
    } else if (a == 0) {
        return 0;
    }
    let previous = 0;
    let current = 1;
    for (let i = 2; i <= a; i++) {
        let next = previous + current;
        previous = current;
        current = next;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
