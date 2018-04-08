'use strict';

const fs = require('fs');

const fileReadHandler = ((err,data, i) => {
  console.log('file data', i, data.toString());
});

const readAllFiles = (paths, cb) => {
  paths.forEach((path, index) => {
    fs.readFile(path, (err, data) => {
      fileReadHandler(err, data, index);
    });
  });

};
 
// function readerCb(err, results) {
//     if(err) throw err;
//     console.log('file 1 was:', results[0]);
//     console.log('file 2 was:', results[1]);
//     console.log('file 3 was:', results[2]);
// }

// const assets = ['../assets/Pygmalion.txt', '../assets/MySecretLife.txt', '../assets/Letter.txt'];
const assets = ['../assets/small.txt', '../assets/medium.txt', '../assets/large.txt'];


// function readAllFiles(paths, callback) {
//   let counter = 0;
//   let results = [];

//   if (paths.length === 0 || paths === null)
//     return callback('paths is undefined');

//   for (let i = 0; i < paths.length; i++) {
//     fs.readFile(paths[i], (err, data) => {
//       if (err) {
//         callback(err);
//         return;
//       }
//       let files = data.toString();
//       results.push(files);
//       counter += 1;
//       console.log('file= ', str);
//     });

//     if (counter === paths.length) {
//       callback(null, results);
//       console.log('results= ', results);
//     }
//   }

//   function fileHandler(err, data, i) {
//     for (let i = 0; i < paths.length; i++) {
//       fs.readFile(paths[i], (err, data));
//     }

//     if (err) {
//       callback(err);
//       return;
//     }
//     console.log('FILE', i, 'finished');

//     result[i] = data.toString('utf-8');
//     // counter++;
//   }
// }
// readAllFiles(assets);

module.exports = readAllFiles;
