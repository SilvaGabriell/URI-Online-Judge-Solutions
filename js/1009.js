var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nomeVendedor = lines.shift();
var salarioFixo = parseFloat(lines.shift());
var totalDeVendas = parseFloat(lines.shift());

var salarioMensal = salarioFixo + (totalDeVendas * 0.15);

console.log("TOTAL = R$ " + salarioMensal.toFixed(2));