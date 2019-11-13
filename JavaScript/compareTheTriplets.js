// https://www.hackerrank.com/challenges/compare-the-triplets/problem
// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding
// points on a scale from to for three categories: problem clarity, originality, and difficulty.
// We define the rating for Alice's challenge to be the triplet , and the rating for Bob's
// challenge to be the triplet .
// Your task is to find their comparison points by comparing with , with , and with .
// If , then Alice is awarded point.
// If , then Bob is awarded point.
// If , then neither person receives a point.
// Comparison points is the total points a person earned.
// Given and , determine their respective comparison points.
// For example, and . For elements , Bob is awarded a point because .
// For the equal elements and , no points are earned. Finally, for elements , so Alice
// receives a point. Your return array would be with Alice's score first and Bob's second.
// Function Description
// Complete the function compareTriplets in the editor below. It must return an array of two integers, the
// first being Alice's score and the second being Bob's.
// compareTriplets has the following parameter(s):
// a: an array of integers representing Alice's challenge rating
// b: an array of integers representing Bob's challenge rating
// Input Format
// The first line contains space-separated integers, , 

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let resultArr = [0,0];
    for (let i = 0; i < a.length ; i++) {
        if (a[i] > b[i]){ // point for alice
            resultArr[0]++;
        } else if (b[i] > a[i]){ // point for bob
            resultArr[1]++;
        } 
    }
    return resultArr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
