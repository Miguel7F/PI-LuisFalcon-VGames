const genreRouter = require('express').Router()
const getGenreController = require('../controllers/getGenreController')

genreRouter.get('/', getGenreController)

module.exports = genreRouter;

