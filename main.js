"use strict";

const codeAmount = 300
const path = "./codes.csv"
const fs = require('fs')

run().catch(error => console.error(error.stack));


async function run() {
    let codes = await generateNewCodes()
    console.log(codes)
    console.log(hasDuplicates(codes))

    await writeOutToCSV(codes);

}


async function readCSV() {
    console.log("reading CSV")
    fs.readFile(path, 'utf8', function (err, data) {
        let currentCodes = data.split(/\r?\n/);
        console.log(currentCodes)
        return currentCodes
    })
}

async function generateNewCodes() {
    let codes = [];
    /*for (const code in currentCodes) {
        codes.push(currentCodes[code])
    }*/

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
    return codes;
}


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


async function writeOutToCSV(codes) {
    const csvWriter = require('csv-writer').createObjectCsvWriter({
        path: `${path}`,
        header: [
            {id: 'code', title: 'code'},
        ]
    });

    csvWriter
        .writeRecords(codes)
        .then(() => console.log('The CSV file was written successfully'));
}



