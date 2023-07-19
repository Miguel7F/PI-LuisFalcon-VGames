require('dotenv').config()
const { URL_GENRE, API_KEY } = process.env
const axios = require('axios')
const { Genre } = require('../db')

function getGenres() {
    axios.get(`${URL_GENRE}?key=${API_KEY}`)
        .then(({ data }) => {
            console.log(data.results);
            data.results.forEach(({ id, name }) => {
                Genre.create({ id, name })
            });
        })
        .catch((error) => {
            throw Error(error)
        })
}

module.exports = getGenres
