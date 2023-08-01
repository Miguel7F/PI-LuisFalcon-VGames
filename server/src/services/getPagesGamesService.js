require('dotenv').config()
const { URL_API, API_KEY } = process.env
const axios = require('axios')
const { Platform, Genre, Videogame} = require('../config/db')

//Esta función solo trae un elemento.

async function getDBInfo() {
    const responseGame = await Videogame.findAll({
        include: [{
            model: Genre,
            attributes: ['name'],
        }]
    })
    const game=responseGame?.map(({dataValues})=>{
        const genresName=dataValues.Genres?.map(({name})=>name)

        return {source:"Data Base", 
        id:dataValues.id, 
        name:dataValues.name,
        background_image:dataValues.background_image,
        rating:Number(dataValues.rating),
        genresName
      }
    })
    return game
}


function getPages(page) {
    return axios.get(`${URL_API}games?key=${API_KEY}&page=${page}&page_size=40`)
        .then(({ data }) => {
            const platformsName = new Set()
            const reducer = data.results?.map(({ id, name, background_image, rating, genres, platforms }) => {
                const genresName = genres?.map(gen => gen.name)
                platforms?.forEach(({ platform }) => platformsName.add(platform.name))
                return { source: 'API RAWG', id, name, background_image, rating, genresName }
            })
            for (const platform of platformsName) {
                Platform.findOrCreate({
                    where: { name: platform }
                })
            }
            return reducer;
        })
        .catch((error) => {
            throw Error(error)
        })
}

//Esta función se encarga de reutilizar la función anterior para traer elementos.
async function getPagesGamesService() {

    //return await Promise.all([getPages(1), getPages(2), getPages(3)])
    return await Promise.all([getPages(1),getPages(2),getPages(3), getDBInfo()])
        .then(async (values) => {
            //const games = [...values[0], ...values[1], ...values[2]]
            const games = [...values[0],...values[1],...values[2],...values[3]]
            const platforms = await Platform.findAll({ order: [['name', 'ASC']] })
            return { games, platforms }
        })
}

module.exports = getPagesGamesService;