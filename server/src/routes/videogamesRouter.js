const videogamesRouter = require('express').Router()

const getPagesGamesController = require('../controllers/getPagesGamesController')
const getGameIdController = require('../controllers/getGameIdController')
const getGameNameController = require('../controllers/getGameNameController')
const postGameController = require('../controllers/postGameController')


videogamesRouter.get('/page', getPagesGamesController)
videogamesRouter.get('/game/:idGame', getGameIdController)
videogamesRouter.get('/name', getGameNameController)
videogamesRouter.post('/', postGameController)


module.exports = videogamesRouter

