const { Videogame } = require('../config/db')

async function postGameService({ name, description, platforms, background_image, released, rating, GenreId }) {

    if (!GenreId) throw Error("El campo GÉNERO no puede ser nulo")

    try {
        const newGame = await Videogame.create({ name, description, platforms, background_image, released, rating })
        newGame.setGenres(GenreId)
        return "Creado existosamente"
    } catch (error) {
        console.log(error.parent.detail);
        throw new Error(error.parent.detail)
    }
}

module.exports = postGameService;