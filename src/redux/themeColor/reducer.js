import { SET_THEME_COLOR } from '@actionTypes'

const init = {
    theme: 'Dark'
}
export default (state = init, action) => {
    switch (action.type) {
        case SET_THEME_COLOR:
            return {
                theme: action.payload,
            }
        default:
            return { ...state }
    }
}