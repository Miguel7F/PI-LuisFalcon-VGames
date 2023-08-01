require('dotenv').config()
const { URL_API, API_KEY } = process.env
const axios = require('axios')
const { Genre } = require('../config/db')

function saveGenre() {
    axios.get(`${URL_API}genres?key=${API_KEY}`)
        .then(({ data }) => {
            Genre.bulkCreate(data.results)
        })
        .catch((error) => {
            throw Error(error)
        })
}

module.exports = saveGenre
