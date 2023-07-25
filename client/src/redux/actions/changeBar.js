import {CHANGE_BAR} from '../../constants/constants'

function changeBar(nameValue) {
    return{
        type:CHANGE_BAR,
        payload:nameValue
    }
}
export default changeBar