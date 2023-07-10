let interno = 0;
let body = document.querySelector("body");

function Externo() {
  	body.classList.remove("interno");
	body.classList.add("externo");
  interno = 1;
}

function Interno() {
  	body.classList.remove("externo");
	body.classList.add("interno");
  interno = 0;
}

function Redirigir() {
  if(interno != 0) {
    window.open("https://shemplutz.github.io/proyecto4/fin/felicidades.html","_self")
  } else {
    window.open("https://shemplutz.github.io/proyecto4/interm/redirigir.html","_self")
  }
}

function Volver() {
  window.open("https://shemplutz.github.io/proyecto4/","_self")
}