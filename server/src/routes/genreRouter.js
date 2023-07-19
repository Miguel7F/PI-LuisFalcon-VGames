const getGenres = require('../controller/getGenres')
const genreRouter = require('express').Router()

genreRouter.get('/', async(req, res) => {
    try {
        await getGenres()
        res.status(200).json({ message: "Se creó exitosamente" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = genreRouter