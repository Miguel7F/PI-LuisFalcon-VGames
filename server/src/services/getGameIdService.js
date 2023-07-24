require('dotenv').config()
const { URL_API, API_KEY } = process.env
const axios = require('axios')

function getGameIdService(idGame) {
    // console.log(isNaN(idGame));
    // if(isNaN(idGame)){
    //     return {idGame:"Es un número"}
    // }else{
    //     return {idGame:"No es un número"}
    // }
    return axios.get(`${URL_API}games/${idGame}?key=${API_KEY}`)
        .then(({ data }) => {
            return data
        })
        .then(({ id, name, background_image, platforms, description, released, rating, genres }) => {
            const platformsName=platforms.map(({platform})=>platform.name)
            const genresName=genres.map(({name})=>name)
            return { id, name, background_image, platformsName, description, released, rating, genresName }
        })
        .catch((error) => {
            throw Error(error)
        })
}

module.exports = getGameIdService