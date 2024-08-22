/* Programa que simula um parquímetro, que lê um valor de moedas depositado em um terminal de estacionamento.
O programa deve informar o tempo de permanência do veículo no local e o troco (se existir.) Se o valor for 
menor do que o mínimo, exiba "Valor insuficiente".
RELAÇÃO: 30 minutos => 1,00 real
         60 minutos => 1,75 real
         120 minutos => 3,00 reais
*/

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value)

  if (valor < 1) {
    resp1.innerText = "Valor insuficiente!"
    resp2.innerText = ""
  } else if (valor < 1.75) {
    resp1.innerText = "Tempo: 30 min"
    valor - 1 != 0 ? resp2.innerText = `Troco: R$ ${(valor - 1).toFixed(2)}` : resp2.innerText = ""
  } else if (valor < 3) {
    resp1.innerText = "Tempo: 60 min"
    valor - 1.75 != 0 ? resp2.innerText = `Troco: R$ ${(valor - 1.75).toFixed(2)}` : resp2.innerText = ""
  } else {
    resp1.innerText = "Tempo: 120 min"
    valor - 3 != 0 ? resp2.innerText = `Troco: R$ ${(valor - 3).toFixed(2)}` : resp2.innerText = " "
  }

    
});
