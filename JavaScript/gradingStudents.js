// https://www.hackerrank.com/challenges/grading/problem
// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range 0 from  to 100.
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's grade according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
// Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

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

function checkIfMultiples5(number, count) { // checks if there are any multiples of 5 in count next positions
    let mult = number
    for (let i = 1; i <= count; i++) {  
        if ((number+i) % 5 === 0) mult = number + i // if multiple of 5, return the number
    }
    return mult
}

function gradingStudents(grades) {
    return grades.map((item) => {
        if (item < 38 || item === 100) return item
        else return checkIfMultiples5(item,2) // checks if next 2 numbers are % 5 ==0
    })
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
