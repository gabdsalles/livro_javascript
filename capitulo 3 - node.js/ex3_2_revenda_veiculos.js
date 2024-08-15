const prompt = require("prompt-sync")()

const veiculo = prompt("Veículo: ")
const preco = Number(prompt("Preço R$: "))

const entrada = preco / 2
const saldo = entrada / 12

console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${saldo.toFixed(2)}`)