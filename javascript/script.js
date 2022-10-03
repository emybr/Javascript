// .0 inciar juego 
alert("inicia el juego")
alert ("Elige tu ataque")

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
        alert ("Ganasteee")
        triunfos = triunfos + 1
    }
    else if (player == 1 && enemy == 0) {
        alert ("Ganasteee")
        triunfos = triunfos + 1
    }
    else if (player == 2 && enemy == 1) {
        alert ("Ganasteee")
        triunfos = triunfos + 1
    }
    else { 
        alert ("perdiste")
        perdidas = perdidas + 1
    }
}

alert ("Ganaste " + triunfos + " veces. perdiste " + perdidas + " veces.")