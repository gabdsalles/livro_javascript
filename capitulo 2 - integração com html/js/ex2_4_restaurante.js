const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    const buffet = Number(frm.inBuffet.value)
    const consumo = Number(frm.inConsumo.value)

    const preco = buffet * consumo / 1000

    resp.innerText = `Valor a pagar R$: ${preco.toFixed(2)}`
    
    e.preventDefault()
})