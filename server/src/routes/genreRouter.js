const getGenres = require('../controller/getGenres')
const genreRouter = require('express').Router()

genreRouter.get('/', async(req, res) => {
    try {
        res.status(200).json(await getGenres())
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = genreRouter