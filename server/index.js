require('dotenv').config()
const { PORT } = process.env
const server = require('./src/server')
const {database} = require('./src/db')

database.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
        
    })
})


