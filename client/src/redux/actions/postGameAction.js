import { API } from '../../constants/constants'
import axios from 'axios'

async function postGame(createGame) {
   return  await axios.post(`${API}videogames`, createGame)
        .then(({ data }) => {
            return data
        })
        .catch((error) => {
            throw new Error(error.response.data.message)
        })

}

export default postGame