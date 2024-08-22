/* Exercício 4.1
    Elaborar um programa que leia um número e informe se ele é par ou ímpar.
*/

const prompt = require("prompt-sync")()

const numero = Number(prompt("Digite um número: "))

numero % 2 == 0 ? console.log(`${numero} é par.`) : console.log(`${numero} é ímpar.`)