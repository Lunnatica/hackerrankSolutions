// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
// A left rotation operation on an array shifts each of the array's elements 
// 1 unit to the left. For example, if 2 left rotations are performed on 
// array [1,2,3,4,5], then the array would become [3,4,5,1,2].

// Given an array  of a integers and a number, n, perform n left rotations on the array.
// Return the updated array to be printed as a single line of space-separated integers.

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the rotLeft function below.
function rotLeft(a, d) {
    let item = 0
    for (let i = 0; i < d; i++) {
        item = a.shift() // remove first element from array
        a.push(item) // add it at the end
    }
    return a
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
