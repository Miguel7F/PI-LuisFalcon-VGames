const postGameService = require('../services/postGameService')

async function postGameController(req, res) {
    const game = req.body
    try {
        res.status(200).json(await postGameService(game))
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
module.exports = postGameController;