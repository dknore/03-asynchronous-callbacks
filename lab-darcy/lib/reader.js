"use strict";

const fs = require('fs');

// const pygmalion = require('../assets/Pygmalion.txt');
// const mySecretLife = require('../MySecretLife.txt');
// const letter = require('../Letter.txt');

// function readerCb(err, results) {
//     if(err) throw err;
//     console.log("file 1 was:", results[0]);
//     console.log("file 2 was:", results[1]);
//     console.log("file 3 was:", results[2]);
// }

// const assets = ["../assets/Pygmalion.txt", "../assets/MySecretLife.txt", "../assets/Letter.txt"];
const assets = ["../assets/small.txt", "../assets/medium.txt", "../assets/large.txt"];

function readAllFiles(paths, readerCb) {
    let results = [];

    for(let i = 0; i < paths.length; i++) {
        fs.readFile(paths[i], (err, data) => {
            if (err) throw err;
            let str = data.toString();
            results.push(str);
            console.log("file=", str);
        });
    }
    if(paths.length === results.length) {
        console.log("results= ", results);
    }
}
readAllFiles(assets);