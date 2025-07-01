const findTheOldest = function(arr) {
    let oldestPerson = null;
    let oldestAge = 0;
    for (let person of arr) {
        let age;
        let currentYear = new Date().getFullYear();
        if (person.yearOfDeath === undefined) {
            age = currentYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;


