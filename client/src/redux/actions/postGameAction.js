import { API } from '../../constants/constants'
import axios from 'axios'

async function postGame(createGame) {
    await axios.post(`${API}videogames`, createGame)
        .then(({ data }) => {
            return data
        })
        .catch((error) => {
            throw Error(error.message)
        })

}

export default postGame