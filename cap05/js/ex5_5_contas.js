const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = ""
let numContas = 0
let valorTotal = 0

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const descricao = frm.inDescricao.value
  const valor = Number(frm.inValor.value)

  resposta = resposta + descricao + " - R$ " + valor.toFixed(2) + "\n"
  numContas++
  valorTotal = valorTotal + valor

  resp1.innerText = `${resposta}--------------------------------------`
  resp2.innerText = `${numContas} conta(s) - Total de R$ ${valorTotal.toFixed(2)}`
  
  frm.inDescricao.value = ""
  frm.inValor.value = ""
  frm.inDescricao.focus()
});
