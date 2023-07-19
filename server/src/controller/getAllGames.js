require('dotenv').config()
const { URL_API, API_KEY } = process.env
const axios = require('axios')

function getAllGames(page) {
    return axios.get(`${URL_API}games?key=${API_KEY}&page=${page}`)
        .then(({ data }) => {
            return data.results;
        })
        .catch((error) => {
            throw Error(error)
        })
}

module.exports = getAllGames