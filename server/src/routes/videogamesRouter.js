const videogamesRouter = require('express').Router()
const getAllGames = require('../controller/getAllGames')
const getOneGame = require('../controller/getOneGame')
const getGameXName = require('../controller/getGameXName')
const createGame = require('../controller/createGame')

videogamesRouter.get('/page/:page', async (req, res) => {
    const { page } = req.params
    try {
        res.status(200).json(await getAllGames(page))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

videogamesRouter.get('/game/:idGame', async (req, res) => {
    const { idGame } = req.params
    try {
        res.status(200).json(await getOneGame(idGame))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

videogamesRouter.get('/name', async (req, res) => {
    const { name } = req.query
    try {
        res.status(200).json(await getGameXName(name))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

videogamesRouter.post('/', async (req, res) => {
    const { game } = req.body
    try {
        res.status(200).json(await createGame(game))
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = videogamesRouter

