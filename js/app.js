evenListener();

function evenListener() {
    let btnJugar = document.querySelector(".btn");

    btnJugar.addEventListener("click", jugar);
}

function jugar() {
 
    let num1 = generarNumeroAleatorio();
    let num2 = generarNumeroAleatorio();
    
	let dado1 = document.querySelector(".dado1");
    let dado2 = document.querySelector(".dado2");
    let titulo = document.querySelector(".titulo");
    
    eliminarPuntos(dado1, dado2);
    llenarDado(dado1, num1);
    llenarDado(dado2, num2);
    
    if(num1 === num2) {
        titulo.innerHTML = "Empate!";
    }
    if(num1 > num2) {
        titulo.innerHTML = "El jugador 1 ha ganado!";
    }
    if(num1 < num2) {
        titulo.innerHTML = "El jugador 2 ha ganado!";
    }
}

function generarNumeroAleatorio() {
    let numero = 0;
    do {
        numero = Math.round(Math.random() * 10);
    } while(numero < 1 || numero > 6);

    return numero;
}

function eliminarPuntos(dado1, dado2) {
    let puntosDado1 = document.querySelectorAll(".dado1 .punto");
    let puntosDado2 = document.querySelectorAll(".dado2 .punto");

    if(puntosDado1) {
        for(let i = 0; i < puntosDado1.length; i++) {
            dado1.removeChild(puntosDado1[i]);
        }
    }
    if(puntosDado2) {
        for(let i = 0; i < puntosDado2.length; i++) {
            dado2.removeChild(puntosDado2[i]);
        }
    }
}

function llenarDado(dado, num = 0) {
   
    for(let i = 0; i < num; i++) {
        let punto = document.createElement("div");
        punto.classList.add("punto");
        dado.appendChild(punto);
    }

}