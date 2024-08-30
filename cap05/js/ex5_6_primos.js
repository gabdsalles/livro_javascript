const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);
  let primo = true;

  for (let i = 2; i < numero / 2; i++) {
    if (numero % i == 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    resp.innerText = `${numero} é Primo!`;
  } else {
    resp.innerText = `${numero} não é Primo.`;
  }
});
