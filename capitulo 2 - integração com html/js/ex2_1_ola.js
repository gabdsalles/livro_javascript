// criar referência ao form e ao elemento h3, que é onde exibiremos a resposta
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um event listener, pra pegar o clique no botão submit
frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value;
  resp.innerText = `Olá ${nome}`;
  e.preventDefault(); //para evitar o envio do form
});
