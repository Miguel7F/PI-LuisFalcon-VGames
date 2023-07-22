const getGameNameService = require('../services/getGameNameService')


async function getGameNameController(req, res) {
    const { name } = req.query
    try {
        res.status(200).json(await getGameNameService(name))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getGameNameController