const getPagesGamesService = require('../services/getPagesGamesService')

async function getPagesGamesController(req, res) {
    try {
        res.status(200).json(await getPagesGamesService())
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = getPagesGamesController;

