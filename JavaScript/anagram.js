// https://www.hackerrank.com/challenges/anagram/problem
// Two words are anagrams of one another if their letters can be rearranged to form the other word.

// In this challenge, you will be given a string. You must split it into two contiguous substrings, 
// then determine the minimum number of characters to change to make the two substrings into anagrams of one another.

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

// Complete the anagram function below.
function anagram(s) {
    if(!(s.length % 2 === 0)) return -1 // if we cannot get 2 same size strings
    let firstS = s.slice(0, (s.length / 2)).toString()
    let secS = s.slice(s.length / 2).toString()
    let changes = 0
    for (let letter of secS) {
        if (firstS.indexOf(letter) === -1) changes++ // if letter not in the other string
        else firstS = firstS.replace(letter,"") // remove letter
    }
    return changes
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = anagram(s);

        ws.write(result + "\n");
    }

    ws.end();
}
