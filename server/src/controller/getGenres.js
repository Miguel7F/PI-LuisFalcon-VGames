const { Genre } = require('../db')

async function getGenres() {
    return await Genre.findAll()
}

module.exports = getGenres;