import {
    CLOCK_1S_TICK
} from '../../constants/actionTypes'

const init = {
tick: 0
}
export default (state = init, action) => {
    switch (action.type) {
        case CLOCK_1S_TICK:
            return {
                tick: state.tick + 1 
            }
        default:
            return { ...state }
    }
}