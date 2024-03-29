// https://www.hackerrank.com/challenges/mini-max-sum/problem
// Given five positive integers, find the minimum and maximum values that 
// can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    arr.sort()
    let miniArr = arr.slice(0, arr.length - 1)
    let maxArr = arr.slice(1, arr.length)
    let miniSum = miniArr.reduce((acc,item) => acc += item)
    let maxSum = maxArr.reduce((acc,item) => acc += item)

    console.log(`${miniSum} ${maxSum}`)
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
