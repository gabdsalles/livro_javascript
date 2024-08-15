/*  Capítulo 3 - Exercício 4
    Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato
    consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da
    ração (em gramas).
*/

const prompt = require("prompt-sync")()

const pesoRacao = Number(prompt("Peso da Ração (kg): "))
const consumo = Number(prompt("Consumo diário (gr): "))

const dias = Math.floor(pesoRacao * 1000 / consumo)
const sobra = (pesoRacao * 1000) % consumo

console.log(`Duração: ${dias} dias`)
console.log(`Sobra: ${sobra} gr`)