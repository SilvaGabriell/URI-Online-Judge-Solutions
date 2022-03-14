var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var peca1 = lines.shift().split(' ');
var codPeca1 = parseInt(peca1.shift());
var qtP1 = parseInt(peca1.shift());
var vrUnit1 = parseFloat(peca1.shift());

var peca2 = lines.shift().split(' ');
var codPeca2 = parseInt(peca2.shift());
var qtP2 = parseInt(peca2.shift());
var vrUnit2 = parseFloat(peca2.shift());

var total = (qtP1*vrUnit1) + (qtP2*vrUnit2);

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));