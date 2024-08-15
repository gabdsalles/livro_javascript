/*  Capítulo 3 - Exercício 3
    Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na
    empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um acréscimo de 1% no salário,
    calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final.
*/

const prompt = require("prompt-sync")()

const salario = Number(prompt("Salário: R$ "))
const tempoServico = Number(prompt("Tempo em anos: "))

const numQuadrienios = Math.floor(tempoServico / 4)
const salarioFinal = salario + (0.01 * salario * numQuadrienios)

console.log(`O funcionário tem ${numQuadrienios} quadriênios.`)
console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`)