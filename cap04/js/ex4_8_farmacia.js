/* Uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta o
número máximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere
as seguintes condições: a) cada parcela deve ser de, no mínimo, 20 reais; b) o número máximo de
parcelas permitidas é 6. */

const prompt = require("prompt-sync")()
const totalCompra = Number(prompt("Total da compra: "))

const parcelaSemCondicao = totalCompra / 20
let numeroParcelas, valorParcela

//se o número de parcelas sem condição for maior que 6, então usamos o número máximo de parcelas permitido.
if (parcelaSemCondicao > 6) {
    numeroParcelas = 6
    valorParcela = totalCompra / numeroParcelas
} else { //se o número de parcelas sem condição for menor, quer dizer que precisamos de valor mínimo de 20 reais para cada parcela.
    numeroParcelas = Math.floor(parcelaSemCondicao)
    valorParcela = totalCompra / numeroParcelas
}

console.log(`Você pode pagar esta compra em ${numeroParcelas} parcelas de R$ ${valorParcela.toFixed(2)}`)

