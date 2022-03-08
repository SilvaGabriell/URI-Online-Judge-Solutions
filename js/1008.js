var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numeroFuncionario = parseInt(lines.shift());
var horasTrabalhadas = parseInt(lines.shift());
var valorPorHora = parseFloat(lines.shift()).toFixed(2);

var salarioFuncionario = (horasTrabalhadas * valorPorHora).toFixed(2);

console.log("NUMBER = " + numeroFuncionario +'\n'+ "SALARY = U$ " + salarioFuncionario);