

// .0 inciar juego 
alert("inicia el juego")
alert ("Elige tu ataque Vale 🤪")

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log = aleatorio

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 0) {
        resultado = " piedra 🪨"    
    }else if (jugada == 1) {
        resultado = "papel 🧻" 
    }else if (jugada == 2) {
        resultado = "tijera ✂️" 
    }else {
        resultado ="NO ES UNA JUGADA VALIDA"
    }
    return resultado
} 
// 1.elegir ataque de los jugadores 
let pc = 0
let player = 0
let triunfos = 0
let perdidas = 0 

while (triunfos < 3 && perdidas < 3) {
    player = prompt("escribe 0 para piedra, 1 para papel y 2 para tijera")
    enemy = aleatorio(0,2)
    // lert es la (eleccion + jugador)

    alert ("tu elegise: " + eleccion (player))
    alert ("pc eligio: " + eleccion (enemy))
    
    // Combate
    if (player == enemy) {
        alert("empate")
    }
    else if (player == 0 && enemy == 2) {
        alert ("Ganasteee Valeeeee")
        triunfos = triunfos + 1
    }
    else if (player == 1 && enemy == 0) {
        alert ("Ganasteee Valee")
        triunfos = triunfos + 1
    }
    else if (player == 2 && enemy == 1) {
        alert ("Ganasteee Valeee")
        triunfos = triunfos + 1
    }
    else { 
        alert ("perdiste")
        perdidas = perdidas + 1
    }
}

alert ("Ganaste " + triunfos + " veces. perdiste " + perdidas + " veces.")



// mio 

/*
function iniciarJuego() {
    let botonMascota = document.getElementById("boton-macota")
    botonMascota.addEventListener("click", seleccionarMascotaJugador)
}


function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya= document.getElementById("ratigueya")
    let spanMascotajugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked) {
        spanMascotajugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        spanMascotajugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        spanMascotajugador.innerHTML = "Ratigueya"
    } else {
        alert (" Vale Selecciona un juegador")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio (1,3)
    let spanMascotaEnemigo = document.getElementById()
    
    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "hipodoge"
    } else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "capipepo" 
    } else {
        spanMascotaEnemigo.innerHTML = "Ratiguya" 

}  

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener ("load", iniciarJuego)

}
*/

// inicio de juego funciona 

/*

let ataqueJugador 
let ataqueEnemigo

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego") 
    botonFuego.addEventListener("click", ataquefuego)
    let botonAgua =document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueague)
    let BotonTierra =document.getElementById("boton-tierra")
    BotonTierra.addEventListener("click", ataquetierra)
}
function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataquefuego() {
    ataqueJugador= "FUEGO"
    ataqueEnemigo()
}
function ataquefuego() {
    ataqueJugador= "AGUA"
    ataqueEnemigo()
}
function ataquefuego() {
    ataqueJugador= "TIERRA"
    taqueEnemigo()
}

function ataqueEnemigo () {
    let ataqueAleatorio = aleatorio(1,3)

    if(ata)

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.addEventListener('load', iniciarJuego)

*/
