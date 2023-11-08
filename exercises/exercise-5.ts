// Exercise 5: Write a function that doubles each Number of an array.

function dobule(numbers: number[]): number[] {
    return numbers.map(number => number * 2);
}

module.exports = dobule;
