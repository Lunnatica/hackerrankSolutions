// https://www.hackerrank.com/challenges/time-conversion/problem
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. 
// Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let amOrPm = s.slice(s.length - 2)
    let newTime = s.slice(0,s.length - 2) // copies string and removes AM / PM
    let hourBefore = parseInt(s.slice(0,2))
    let newHour = hourBefore
    if (amOrPm === "AM" && hourBefore === 12) { // morning we only have to check 12
        newHour = "00"
    } else if (amOrPm === "PM" && hourBefore !== 12) { // because for 12 it's the same
        newHour += 12
    } 
    
    newTime = newTime.replace(hourBefore.toString().padStart(2,"0"), newHour.toString().padStart(2,"0"))
    return(newTime)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
