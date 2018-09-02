/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {

    const count = A.reduce((acc, next) => {
        acc[next] ? acc[next]++ : acc[next] = 1;
        return acc
    }, {});

    for (let key in count) {
        if (count[key] % 2 != 0) {
            return key
        }
    }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])) //, 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])) //, -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])) //, 5);
console.log(findOdd([10])) //, 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])) //, 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])) //, 1);