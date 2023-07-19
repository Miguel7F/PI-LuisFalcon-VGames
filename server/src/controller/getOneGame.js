require('dotenv').config()
const { URL_API, API_KEY } = process.env
const axios = require('axios')

function getOneGame(idGame) {
    // console.log(isNaN(idGame));
    // if(isNaN(idGame)){
    //     return {idGame:"Es un número"}
    // }else{
    //     return {idGame:"No es un número"}
    // }
    return axios.get(`${URL_API}games/${idGame}?key=${API_KEY}`)
        .then(({ data }) => {
            return data;
        })
        .catch((error) => {
            throw Error(error)
        })
}

module.exports = getOneGame