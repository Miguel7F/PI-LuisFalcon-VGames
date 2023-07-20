require('dotenv').config()
const { PORT } = process.env
const server = require('./src/server')
const { database } = require('./src/db')
const saveGenre = require('./src/controller/saveGenre')

database.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        saveGenre()
        console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    })
})


