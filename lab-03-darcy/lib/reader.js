'use strict';

const fs = require('fs');
const assets = ['../assets/small.txt', '../assets/medium.txt', '../assets/large.txt'];

function sortFiles(err, data, index) {
  console.log('inside sortFiles', data, index);
}

function readFiles(paths, callback) {
  let results = [];
  console.log('paths.length= ', paths.length);
  console.log('paths= ', paths);

  if (paths.length === 0 || paths === null) {
    let error = new Error('Ruh Roh, an error :/');
    callback(error);
    return;
  }

  for (let i = 0; i < paths.length; i++) {
    console.log('paths[i]= ', paths[i]);
    fs.readFile(paths[i], (err, data) => {
      if (err) {
        callback(err);
        return;
      }
      sortFiles(err, data, i);
      console.log('inside sortFiles!!');
      let files = data.toString();
      console.log('files= ', files);
      results.push(files);
    });
    console.log('results= ', results);
    return results;
  }
}

readFiles(assets);

// stuff w/ JB
// const readFiles = (paths, callback) => {
//   let error = new Error('Error has happened :/');
//   callback(error);
// };

module.exports = readFiles;