// https://www.hackerrank.com/challenges/staircase/problem
// Consider a staircase of size n:
//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. 
// The last line is not preceded by any spaces.
// Write a program that prints a staircase of size n.
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

// Complete the staircase function below.
function staircase(n) {
    // process.stdout.write("hello: ");
    let arrStr = []
    for (let i = n - 1; i >= 0; i--) {
        arrStr.push("#")
        console.log(arrStr.join("").padStart(n,' '))
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
