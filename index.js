const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const jugadores = []

//id de jugador aleatoreo y agrego seleccion de jugador 

class Jugador {
    constructor(id) {
        this.id = id
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
})

app.post("/juego/:jugadorid",(req, res) => {
    const jugadorId = req.params.jugadorid || ""
    console.log(jugadores)
    console.log(jugadorId)
    res.end()

})

app.listen(8080, () => {
    console.log("Servidor funcionando")
})



