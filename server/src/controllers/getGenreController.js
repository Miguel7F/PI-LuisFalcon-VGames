const getGenresService = require('../services/getGenresService')

async function getGenreController(req, res) {
    try {
        res.status(200).json(await getGenresService())
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = getGenreController;