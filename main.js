"use strict";


const codeAmount = 180
const path = "./codes.csv"

const fs = require('fs')

let currentCodes = []

fs.readFile(path, 'utf8', function (err, data) {
    currentCodes = data.split(/\r?\n/);
    console.log(currentCodes)

})

console.log(currentCodes)



function hasDuplicates(array) {
    let valuesSoFar = Object.create(null);
    for (let i = 0; i < array.length; ++i) {
        let value = array[i];
        if (value.code in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}

console.log(codes.length)
console.log(hasDuplicates(codes))

const csvWriter = require('csv-writer').createObjectCsvWriter({
    path: `${path}`,
    header: [
        {id: 'code', title: 'Code'},
    ]
});

csvWriter
    .writeRecords(codes)
    .then(() => console.log('The CSV file was written successfully'));



