var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift()) * 3.5;
var B = parseFloat(lines.shift()) * 7.5;
    A.toFixed(1)
    B.toFixed(1)
var MEDIA = ((A + B) / 11).toFixed(5);

console.log("MEDIA = " + MEDIA);
