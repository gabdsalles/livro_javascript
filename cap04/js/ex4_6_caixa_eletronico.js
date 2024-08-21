/* Elaborar um programa que leia um número e calcule sua raiz quadrada. Caso a raiz seja exata (quadrados perfeitos),
informá-la. Senão, informe: "Não há raiz exata para ...". */

const frm = document.querySelector("form");
const resp100 = document.querySelector("#outResp100");
const resp50 = document.querySelector("#outResp50")
const resp10 = document.querySelector("#outResp10")

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorSaque = Number(frm.inSaque.value)

  //se o valor do saque não for múltiplo de 10, encerra a operação.
  if (valorSaque % 10 != 0) {
    alert("Valor inválido para as notas disponíveis (10, 50 e 100).")
    frm.inSaque.focus()
    return
  }

  //calcular notas de 100
  const notas100 = Math.trunc(valorSaque / 100)
  let resto = valorSaque % 100

  //calcular notas de 50
  const notas50 = Math.trunc(resto / 50)
  resto = resto % 50

  //calcular notas de 10
  const notas10 = Math.trunc(resto / 10)

  //exibir resultados
  resp100.innerText = `Notas de R$ 100: ${notas100}`
  resp50.innerText = `Notas de R$ 50: ${notas50}`
  resp10.innerText = `Notas de R$ 10: ${notas10}`
    
});
