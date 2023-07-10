let total = 0;
let carro = [];
let carroCantidad = [];
let carroPrecio = [];
let body = document.querySelector("body");

function totalPlus(more) {
if(total + more >= 0) {
		total += more;
}
	document.getElementById("cantidad").innerHTML = " "+ total+ " ";
}

function CarroPush()
{

	let s = document.getElementById("objeto").innerHTML;
	let x = document.getElementById("cantidad").innerHTML;
	let z = document.getElementById("precio").innerHTML;
	const i = carro.find((element) => element == s);
	if (x> 0) {
		if (i == undefined) {
		carro.push(s);
		carroCantidad.push(x);
			carroPrecio.push(x*z)
		} else {
			carroCantidad[i] = (x + carroCantidad[i]);
			carroPrecio[i] = (x + carroCantidad[i])*z;
		}		
	}

	document.getElementById("notif").innerHTML = carroCantidad.length;
	
	document.getElementById("lista").innerHTML = "";
	
	for(y = 0; y < carro.length; y++) {
		document.getElementById("lista").innerHTML += carro[y]+ " x"+carroCantidad[y] + ".........." + carroPrecio[y];
	}
	
}

function CarroRemove()
{
	const i = carro.find(IDHERE);
	if (i != undefined) {
		carro.splice(i, 1);
		carroCantidad.splice(i,1);
	}
}

function AbreCarrito() {
	body.classList.remove("cerrado");
	body.classList.add("desplegado");
}

function CierraCarrito() {
	body.classList.remove("desplegado");
	body.classList.add("cerrado");
}

function AbreCompra() {
	window.open("https://shemplutz.github.io/proyecto4/pay/payment.html","_self");
}

function BorraCarro() {
	carro = [];
carroCantidad = [];
carroPrecio = [];
	
	document.getElementById("lista").innerHTML = "";
	
		document.getElementById("notif").innerHTML = 0;
	
}
