

const datos = []
let idJugadores = null
const resultadoJuego = localStorage.getItem("datos")
const nombreDeJugador = document.getElementById("parrafo")
nombreDeJugador.innerText = ("😊 Hola en la ultima partida ") + resultadoJuego
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonTierra = document.getElementById('boton-tierra')
sectionReiniciar.style.display = 'none'
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let creoPersonajes = []
let ataqueJugador
let ataqueEnemigo
let opcionDePersonajes
let inputEmy
let inputLolo
let inputLu
let vidasJugador = 3
let vidasEnemigo = 3

class Personajes {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let Emy = new Personajes('Emy', 'assets/Emy.png', 5)
let Lolo = new Personajes('Lolo', 'assets/Lolo.png', 5)
let Lu = new Personajes('Lu', 'assets/Cele.png', 5)

Emy.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

Lolo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },

)

Lu.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

creoPersonajes.push(Emy, Lolo, Lu,)

function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none'

    //creo personajes 
    creoPersonajes.forEach((personaje) => {
        opcionDePersonajes = `
        <input type="radio" name="mascota" id=${personaje.nombre} />
        <label class="tarjeta-de-mokepon" for=${personaje.nombre}>
            <p>${personaje.nombre}</p>
            <img src=${personaje.foto} alt=${personaje.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDePersonajes
        inputEmy = document.getElementById('Emy')
        inputLolo = document.getElementById('Lolo')
        inputLu = document.getElementById('Lu')
    })

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputEmy.checked) {
        spanMascotaJugador.innerHTML = 'Emy'
        idJugadores = 'Emy'
    } else if (inputLolo.checked) {
        spanMascotaJugador.innerHTML = 'Lolo'
        idJugadores = 'Lolo'
    } else if (inputLu.checked) {
        spanMascotaJugador.innerHTML = 'Lu'
        idJugadores = 'lu'
    } else {
        alert('Selecciona una mascota')
    }
    seleccionarJugador(idJugadores)
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3)

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Emy'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Lolo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Lu'
    }
}

// envio nombre de jugador  

function seleccionarJugador(idJugadores) {
    fetch(`http://localhost:8080/juego/${idJugadores}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            jugador: idJugadores
        })
    })
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    if (ataqueAleatorio === 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio === 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

function combate() {
    if (ataqueEnemigo === ataqueJugador) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador === 'FUEGO' && ataqueEnemigo === 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador === 'AGUA' && ataqueEnemigo === 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador === 'TIERRA' && ataqueEnemigo === 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo === 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste 😊")
    } else if (vidasJugador === 0) {
        crearMensajeFinal('Lo siento, perdiste 😔')
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    sectionReiniciar.style.display = 'block'
    console.log(resultadoFinal)
    localStorage.setItem("datos", JSON.stringify(resultadoFinal))
}

function reiniciarJuego() {
    location.reload()
}

//configuro llamada al servidor local para obtener id

unirseAlJuego()

function unirseAlJuego() {
    fetch("http://localhost:8080/unirse")
        .then(function (res) {
            console.log(res)
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta)
                        idJugadores = respuesta
                    })
            }
        })
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)


