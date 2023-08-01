const { Videogame } = require('../config/db')

async function postGameService({ name, description, background_image, released, rating, PlatformId, GenreId }) {
    if (!GenreId || !GenreId.length) throw Error("Field GenreId can not be empty")
    if (!PlatformId || !PlatformId.length) throw Error("Field PlatformID can not be empty")

    try {
        const newGame = await Videogame.create({ name, description, background_image, released, rating })
        newGame.setGenres(GenreId)
        newGame.setPlatforms(PlatformId)
        return "The video game was successfully created"
    } catch (error) {
        console.log(error.message);
        throw new Error(error)
    }
}

module.exports = postGameService;