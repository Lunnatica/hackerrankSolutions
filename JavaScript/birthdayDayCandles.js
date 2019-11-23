// https://www.hackerrank.com/challenges/birthday-cake-candles/problem
// You are in charge of the cake for your niece's birthday and have decided the cake
// will have one candle for each year of her total age. When she blows out the candles, she’ll 
// only be able to blow out the tallest ones. 
// Your task is to find out how many candles she can successfully blow out.
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

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    let maxValue = Math.max(...ar)
    let count = 0
    //return ar.filter(item => item === maxValue).length
    for (let i = 0; i < ar.length; i++){ // using less memory than the above line
        if (ar[i] === maxValue) count++
    }
    return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}
