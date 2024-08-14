/*  Capítulo 2 - exercício b
    Elaborar um programa para uma lan house de um aeroporto - O programa deve ler o valor de cada 15
    minutos de um computador e o tempo de uso por um cliente em minutos. Informe o valor a ser pago
    pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral.
*/

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const a_pagar = valor * (Math.ceil(tempo / 15))
    
    resp.innerText = `Valor a pagar: R$ ${a_pagar.toFixed(2)}`

    e.preventDefault()
})