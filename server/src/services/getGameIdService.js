require('dotenv').config()
const { URL_API, API_KEY } = process.env
const axios = require('axios')
const { Videogame, Genre, Platform } = require('../config/db')

async function getGameIdService(idGame) {
    console.log(isNaN(idGame));
    if (isNaN(idGame)) {
        const { dataValues } = await Videogame.findByPk(idGame, {
            include: [{
                model: Genre,
                attributes: ['name'],
            },
            {
                model: Platform,
                attributes: ['name'],
            }
            ]
        })
        const genresName = dataValues.Genres?.map(({ name }) => name)
        const platformsName = dataValues.Platforms?.map(({ name }) => name)
        return {
            id: dataValues.id,
            name: dataValues.name,
            background_image: dataValues.background_image,
            description: dataValues.description,
            released: dataValues.released,
            rating: Number(dataValues.rating),
            platformsName,
            genresName
        }
    }
    else {
        return axios.get(`${URL_API}games/${idGame}?key=${API_KEY}`)
            .then(({ data }) => {
                return data
            })
            .then(({ id, name, background_image, platforms, description, released, rating, genres }) => {
                const platformsName = platforms.map(({ platform }) => platform.name)
                const genresName = genres.map(({ name }) => name)
                return {
                    id,
                    name,
                    background_image,
                    description,
                    released,
                    rating,
                    platformsName,
                    genresName
                }
            })
            .catch((error) => {
                throw Error(error)
            })
    }

}

module.exports = getGameIdService