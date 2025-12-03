//BOTÃO DO MODO ESCURO////////////
const toggleButton = document.getElementById('modoEscuro');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('darkmode');
});

const form = document.querySelector(`#formularioHome`);
form.addEventListener(`submit`, function(e){
  const idade = document.querySelector(`#idadePassageiro`).value;
  e.preventDefault();
  if (idade >= 18) {
    window.location.href ="reserva.html";
  } else {
    console.log(`de menor`);
  
  }
});