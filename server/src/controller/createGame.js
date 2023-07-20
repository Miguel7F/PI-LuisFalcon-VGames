const { Videogame } = require('../db')

async function createGame({ name, description, platforms, background_image, released, rating, GenreId }) {
    if (!name) throw Error("El campo NOMBRE no puede ser nulo")
    if (!description) throw Error("El campo DESCRIPCIÓN no puede ser nulo")
    if (!platforms) throw Error("El campo PLATAFORMAS no puede ser nulo")
    if (!background_image) throw Error("El campo IMAGEN no puede ser nulo")
    if (!released) throw Error("El campo LANZAMIENTO no puede ser nulo")
    if (!rating) throw Error("El campo CLASIFICACIÓN no puede ser nulo")
    if (!GenreId) throw Error("El campo GÉNERO no puede ser nulo")

    try {
        const newGame=await Videogame.create({ name, description, platforms, background_image, released, rating })
        newGame.setGenres(GenreId)
        return "Creado existosamente"
    } catch (error) {
        console.log(error.parent.detail);
        throw new Error(error.parent.detail)
    }
}

module.exports = createGame;