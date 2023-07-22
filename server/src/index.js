require('dotenv').config()
const { PORT } = process.env
const server = require('./config/server')
const { database } = require('./config/db')
const saveGenreService = require('./services/saveGenreService')
const morgan = require('morgan')

server.use(morgan('dev'))

database.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        saveGenreService()
        console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    })
})


