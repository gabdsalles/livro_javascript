const frm = document.querySelector("form")
const respFilme = document.querySelector("h3")
const respDuracao = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value;
    const duracao = Number(frm.inDuracao.value);

    const horas = Math.trunc(duracao / 60)
    const minutos = duracao % 60

    respFilme.innerText = `${titulo}`
    respDuracao.innerText = `${horas} hora(s) e ${minutos} minuto (s).`

    e.preventDefault();
})