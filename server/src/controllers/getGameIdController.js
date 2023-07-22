const getGameIdService = require('../services/getGameIdService')

async function getGameIdController (req, res) {
    const { idGame } = req.params
    try {
        res.status(200).json(await getGameIdService(idGame))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getGameIdController;