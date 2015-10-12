#!/usr/bin/env node
var colors = require('colors');
var sampleText = require('./sampleText.js');
var givenRegex = process.argv[2];

if (!givenRegex) {
    return void console.log('ERROR: Missing regex'.red);
}

var regex = new RegExp(givenRegex, 'g');
var matches = sampleText.match(regex);

if (!matches) {
    return void console.log('ERROR: No matches found. Check if the regex is valid.'.red);
}

console.log('Creating regex with:'.blue, regex, '\n');
console.log('Testing regex against:'.blue.underline);
console.log(sampleText);
console.log('');
console.log('Matches:'.blue.underline);

matches.forEach(function(match, i){
    console.log(match.green);
});

console.log('');
