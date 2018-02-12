"use strict";

const readAllFiles = require('../lib/reader.js');

describe("readAllFiles function", () => {
    it("should ensure the function rejects errors with invalid file paths.", () => {
        let expected = "error";
        let path = "./wrongpath.txt";
        let result = forEach(path);
        expect(result).toBe(expected);
    })
    it("should ensure the function correctly resolves mapped string data for an array of file paths.", () => {
        let expected = [""];
        let path = ["../assets/small.txt", "../assets/medium.txt", "../assets/large.txt"];
        let result = forEach(path);
        expect(result).toBe(expected);
    })
    it("should make sure the order of the results matches the order of the files as they were passed in.", () => {
        // let exptected = 
        // let array = 
        // let result = forEach(array);
        // expect(result).toBe(expected);
    })