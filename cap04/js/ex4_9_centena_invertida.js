/* Elaborar um programa que leia um número - que deve ser uma centena. Calcule
e exiba a centena invertida. Caso o número não seja uma centena, exiba uma mensagem. */

const prompt = require("prompt-sync")()
const numero = Number(prompt("Insira um número: "))

if (numero < 100) {
    console.log(`O número ${numero} não é uma centena.`)
    return
}

let centena, dezena, unidade, resto
centena = Math.floor(numero / 100)
resto = numero % 100
dezena = Math.floor(resto / 10)
resto = resto % 10
unidade = Math.floor(resto / 1)

console.log(`Invertido: ${unidade}${dezena}${centena}`)

