"use strict";

const fs = require('fs');

const pygmalion = require('../Pygmalion.txt');
const mySecretLife = require('../MySecretLife.txt');
const letter = require('../Letter.txt');


function readerCb(err, results) {
    console.log("file 1 was:", results[0]);
    console.log("file 1 was:", results[1]);
    console.log("file 1 was:", results[2]);
}

function readAllFiles(["file1", "file2", "file3"], readerCb) {

    fs.readFile('../Pygmalion.txt', (err, data) => {
        if (err) throw err;
        let str = data.toString();
        console.log(str);
    });

//     fs.readFile('../MySecretLife.txt', (err, data) => {
//         if (err) throw err;
//         let str = data.toString();
//         console.log(str);
//     });

//     fs.readFile('../Letter.txt', (err, data) => {
//         if (err) throw err;
//         let str = data.toString();
//         console.log(str);
//     });
// }



