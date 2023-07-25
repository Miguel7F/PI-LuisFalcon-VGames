require('dotenv').config()
const { URL_API, API_KEY } = process.env
const axios = require('axios')

//Esta función solo trae un elemento.
function getPages(page) {
    return axios.get(`${URL_API}games?key=${API_KEY}&page=${page}&page_size=40`)
        .then(({ data }) => {
            const reducer = data.results?.map(({ id, name, background_image, rating, genres }) => {
                const genreName = genres?.map(gen => gen.name)
                return { source:'API RAWG', id, name, background_image, rating, genreName }
            })
            return reducer;
        })
        .catch((error) => {
            throw Error(error)
        })
}

//Esta función se encarga de reutilizar la función anterior para traer elementos.
function getPagesGamesService() {

    return Promise.all([getPages(1), getPages(2), getPages(3)])
        .then((values) => {
            return [...values[0], ...values[1], ...values[2]]
        })
}

module.exports = getPagesGamesService;