import axios from 'axios'
import { API, GET_GAMES } from './constants'


function getGames() {
    return function (dispatch) {
        axios.get(`${API}videogames/page`)
            .then(({ data }) => dispatch({
                type: GET_GAMES,
                payload: data
            }))
            .catch((error) => {
                console.log(error);
                alert(error.message)
            })
    }
}

export default getGames;