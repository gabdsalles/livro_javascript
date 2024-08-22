/* Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo.
Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam
formar um triângulo, exiba também qual o tipo do triângulo:
EQUILÁTERO => 3 lados iguais
ISÓSCELES => 2 lados iguais
ESCALENO => todos os lados diferentes */

const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {

    e.preventDefault()
    
    const a = Number(frm.inLadoA.value)
    const b = Number(frm.inLadoB.value)
    const c = Number(frm.inLadoC.value)

    if ((a + b < c) || (b + c < a) || (c + a < b)) {
        resp1.innerText = "Não formam triângulo."
    } else {
        resp1.innerText = "Lados podem formar um triângulo"
        if (a == b && b == c) {
            resp2.innerText = "Tipo: Equilátero"
        } else if (a == b || b == c || c == a) {
            resp2.innerText = "Tipo: Isósceles"
        } else {
            resp2.innerText = "Tipo: Escaleno"
        }
    }
})

