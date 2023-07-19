const { Videogame } = require('../db')

async function createGame({ name, description, platforms, background_image, released, rating, GenreId }) {
    name
    
    await Videogame.create({})

    //
}

module.exports = createGame;