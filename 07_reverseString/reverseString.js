const reverseString = function(string) {
    let arrayOfLetters = string.split("");
    let reversedLetters = arrayOfLetters.reverse();
    let result = reversedLetters.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
