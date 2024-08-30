const prompt = require("prompt-sync")()

const valor = prompt("Valor R$: ")
const num = Number(prompt("Número de parcelas: "))

const valorParcelas = Math.floor(valor / num)
const resto = valor - (valorParcelas * num)

for (let i = 1; i < num; i++) {

    console.log(`${i}ª parcela: R$ ${valorParcelas.toFixed(2)}`)
}

//última parcela, coloca o resto
console.log(`${num}ª parcela: R$ ${(valorParcelas + resto).toFixed(2)}`)
