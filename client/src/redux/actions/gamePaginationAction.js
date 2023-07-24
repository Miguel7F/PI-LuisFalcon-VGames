import { GAME_PAGINATION } from "./constants";

function gamePagination(page) {
    return {
        type: GAME_PAGINATION,
        payload: page,
    }
}

export default gamePagination;