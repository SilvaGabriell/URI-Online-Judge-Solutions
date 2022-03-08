var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = 3.14159;
var area = parseFloat(lines.shift());
area = area.toFixed(2)

console.log("A=" + (n*(Math.pow(area,2))).toFixed(4));