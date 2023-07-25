import axios from 'axios'
import { API, GET_GAMES } from '../../constants/constants'
import data from '../../constants/hundredGames'

function getGames() {
    return {
        type: GET_GAMES,
        payload: data
    }

    /*return function (dispatch) {
        axios.get(`${API}videogames/page`)
            .then(({ data }) => dispatch({
                type: GET_GAMES,
                payload: data
            }))
            .catch((error) => {
                console.log(error);
                throw Error (error.message)
            })
    }*/
}

export default getGames;