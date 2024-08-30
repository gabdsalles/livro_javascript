const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);
  let resposta = ""
  
  for (let i = 1; i <= numero; i++) {

    if (i % 2 == 0) {
        resposta = resposta + "_"
    } else {
        resposta = resposta + "*"
    }

  resp.innerText = resposta  
  }
});
