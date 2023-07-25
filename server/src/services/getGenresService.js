const { Genre } = require('../config/db')

async function getGenresService() {
    return await Genre.findAll({order:[['name', 'ASC']]})
}

module.exports = getGenresService;