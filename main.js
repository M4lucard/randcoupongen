"use strict";


const codeAmount = 180

let codes = []

while (codes.length < codeAmount) {
    let x = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    if (codes.includes(x)) {
        continue;
    } else {
        if (x.length !== 5) {
            continue;
        } else {
            codes.push({code: x})
        }
    }
}

function hasDuplicates(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value.code in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}

console.log(codes)
console.log(codes.length)
console.log(hasDuplicates(codes))

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'codes.csv',
    header: [
        {id: 'code', title: 'Code'},
    ]
});

csvWriter
    .writeRecords(codes)
    .then(() => console.log('The CSV file was written successfully'));



