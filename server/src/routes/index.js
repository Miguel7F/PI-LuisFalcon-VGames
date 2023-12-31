const router = require('express').Router()
const genreRouter=require('./genreRouter')
const videogamesRouter=require('./videogamesRouter')

router.use('/videogames', videogamesRouter)
router.use('/genre', genreRouter)

module.exports = router;