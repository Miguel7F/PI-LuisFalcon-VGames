import { API } from "../constants/constants";
import axios from 'axios'

async function getGameDetail(id) {
    try {
        const {data}= await axios.get(`${API}videogames/game/${id}`)
        return data
    } catch (error) {
       throw Error(error.message)   
    }
}

export default getGameDetail