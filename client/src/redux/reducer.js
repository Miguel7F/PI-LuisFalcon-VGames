import { GET_GAMES, GET_GENRES, CHANGE_BAR } from "../constants/constants";
import filterSortGames from "../services/filterSortGames";
import getPlatforms from "../services/getPlatforms";

const initialState = {
    genres: [],
    games: [],
    platforms: [],
    modificated: [],
    genre: "All",
    direction: "down",
    type: "rating",
    source: "All",
    nameGame: ""
}

function rootReducer(state = initialState, { type, payload }) {

    switch (type) {
        case GET_GENRES:
            return { ...state, genres: payload }
        case GET_GAMES:
            return {
                ...state,
                games: payload,
                modificated: filterSortGames({ ...state, games: payload }),
                platforms: getPlatforms(payload)
            }
        case CHANGE_BAR:
            return {
                ...state,
                [payload.name]: payload.value,
                modificated: filterSortGames({ ...state, [payload.name]: payload.value })
            }
        default:
            return { ...state }
    }
}
export default rootReducer;