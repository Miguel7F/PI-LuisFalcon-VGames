import { API } from "../constants/constants";
import axios from 'axios'

async function getGameDetail(id) {
    return await axios.get(`${API}videogames/game/${id}`)
        .then(({ data }) => {
            return data
        })
        .catch((error) => {
            alert(error.response.data);
            //throw Error(error.response.data)
        })
}

export default getGameDetail