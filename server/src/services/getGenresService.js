const { Genre } = require('../config/db')

async function getGenresService() {
    return await Genre.findAll()
}

module.exports = getGenresService;