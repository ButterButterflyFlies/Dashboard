import {
    SET_PIE_CHART_VALUE,
    SET_PIE_CHART_VALUE_SUCCESS,
    SET_PIE_CHART_VALUE_FAILURE
} from '../../constants/actionTypes'

const init = {
    val1: 38,
    val2: 38,
    error: null
}
export default (state = init, action) => {
    switch (action.type) {
        case SET_PIE_CHART_VALUE:
            return {
                ...state,
                val1: action.payload.val1,
                val2: action.payload.val2,
            }
        case SET_PIE_CHART_VALUE_SUCCESS:
            return {
                ...state,
                error: false
            }
        case SET_PIE_CHART_VALUE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return { ...state }
    }
}