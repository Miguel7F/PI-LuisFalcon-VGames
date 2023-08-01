import { GET_GAMES, GET_GENRES, CHANGE_BAR, UPDATE_GAMES } from "../constants/constants";
import filterSortGames from "../services/filterSortGames";
//import getPlatforms from "../services/getPlatforms";

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
                games: payload.games,
                modificated: filterSortGames({ ...state, games: payload.games }),
                platforms: payload.platforms
            }
        case CHANGE_BAR:
            return {
                ...state,
                [payload.name]: payload.value,
                modificated: filterSortGames({ ...state, [payload.name]: payload.value })
            }
        case UPDATE_GAMES:
            return {
                ...state,
                games: [...state.games, payload],
                modificated: filterSortGames({ ...state, games: [...state.games, payload] }),
            }
        default:
            return { ...state }
    }
}
export default rootReducer;