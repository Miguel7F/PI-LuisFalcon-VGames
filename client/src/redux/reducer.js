import { GAME_PAGINATION, GET_GAMES, GET_GENRES, PAGE_SIZE } from "./actions/constants";

const initialState = {
    genres: [],
    games: [],
    pagination: []
}

function rootReducer(state = initialState, { type, payload }) {
    function gameXpage(games, start, end) { return games.slice(start, end) }

    switch (type) {
        case GET_GENRES:
            return { ...state, genres: payload }
        case GET_GAMES:
            return { ...state, games: payload, pagination: gameXpage(payload, 0, PAGE_SIZE) }
        case GAME_PAGINATION:
            return { ...state, pagination: gameXpage(games, PAGE_SIZE * (payload - 1), PAGE_SIZE * payload) }
        default:
            return { ...state }
    }
}
export default rootReducer;