/* Sabendo que o fuso horário da França em relação ao Brasil é de + 5 horas (no horário de verão da França),
 elaborar um programa que leia a hora no Brasil e informe a hora na França. */

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    const horaBrasil = Number(frm.inHoraBrasil.value)
    const horaFranca = horaBrasil < 19 ? horaBrasil + 5 : horaBrasil + 5 - 24

    resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`

    e.preventDefault()

})