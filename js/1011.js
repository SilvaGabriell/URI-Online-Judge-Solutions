var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift());
const pi = 3.14159;
var resultado = (4/3)* pi *(Math.pow(raio, 3));

console.log('VOLUME = ' + (resultado.toFixed(3)));