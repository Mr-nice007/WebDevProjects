// function getBeer() {
//     for (let beer = 99; beer > 0; beer--) {
//         console.log(
//             beer + " bottle" + (beer === 1 ? "" : "s") + " of beer on the wall, " +
//             beer + " bottle" + (beer === 1 ? "" : "s") + " of beer.\n" +
//             "Take one down and pass it around, " +
//             (beer - 1 === 0 ? "no more" : (beer - 1)) + " bottle" + (beer - 1 === 1 ? "" : "s") +
//             " of beer on the wall.\n"
//         );
//     }
// }

// getBeer();

function fibonacciGenerator(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fib = [0, 1];
    for (var i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

fibonacciGenerator(5); // returns [0, 1, 1, 2, 3]

// leap year checker function
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

// Example usage:
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true