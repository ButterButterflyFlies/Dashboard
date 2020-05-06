import { combineReducers } from 'redux';

import getPieChartValueReducer from './chartValues/getPieChartValue/reducer'

const reducers = combineReducers({
    getPieChartValueReducer,
})

export default reducers