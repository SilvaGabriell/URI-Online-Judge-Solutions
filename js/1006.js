var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift()).toFixed(1) * 2;
var B = parseFloat(lines.shift()).toFixed(1) * 3;
var C = parseFloat(lines.shift()).toFixed(1) * 5;

var MEDIA = ((A + B + C) / 10).toFixed(1);

console.log("MEDIA = " + MEDIA);