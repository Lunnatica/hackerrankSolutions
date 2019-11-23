// https://www.hackerrank.com/challenges/plus-minus/problem
//Given an array of integers, calculate the fractions of its elements that are positive,
// negative, and are zeros. Print the decimal value of each fraction on a new line.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) positives++
        else if (arr[i] < 0) negatives++
        else zeros++
    }
    let posFraction = positives / arr.length
    let negFraction = negatives / arr.length
    let zerFraction = zeros / arr.length

    console.log(posFraction.toFixed(6))
    console.log(negFraction.toFixed(6))
    console.log(zerFraction.toFixed(6))

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
