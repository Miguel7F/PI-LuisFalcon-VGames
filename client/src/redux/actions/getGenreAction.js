import axios from 'axios'
import { API, GET_GENRES } from './constants'


function getGenres() {
    return function (dispatch) {
        axios.get(`${API}genre`)
            .then(({ data }) => dispatch({
                type: GET_GENRES,
                payload: data
            }))
            .catch((error) => {
                alert(error.message)
            })
    }
}

export default getGenres;