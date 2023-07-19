require('dotenv').config()
const { URL_API, API_KEY } = process.env
const axios = require('axios')
const { Genre } = require('../db')

function saveGenre() {
    axios.get(`${URL_API}genres?key=${API_KEY}`)
        .then(({ data }) => {
            data.results.forEach(({ id, name }) => {
                Genre.create({ id, name })
            });
        })
        .catch((error) => {
            throw Error(error)
        })
}

module.exports = saveGenre
