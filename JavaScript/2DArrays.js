// https://www.hackerrank.com/challenges/2d-array/problem
// Given a 6x6 2D Array, arr:

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. 
// Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

'use strict';

const fs = require('fs');

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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let biggestSum = -Infinity
    let currentSum = 0
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {// for every hourglass
            const a = arr[i][j]
            const b = arr[i][j+1]
            const c = arr[i][j+2]
            const d = arr[i+1][j+1]
            const e = arr[i+2][j]
            const f = arr[i+2][j+1]
            const g = arr[i+2][j+2]
            currentSum = a + b + c + d + e + f + g
            if (currentSum > biggestSum) biggestSum = currentSum
        }
    }
    return biggestSum
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
