// Exercise 8: Write a function that sums all numbers of an array.

function sum(numbers: number[]): number {
    return numbers.reduce((total, number) => total + number, 0);
}

module.exports = sum;
