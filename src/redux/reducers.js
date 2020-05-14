import { combineReducers } from 'redux';

import pieChartValueReducer from './pieChartValue/reducer'

const reducers = combineReducers({
    pieChartValueReducer,
})

export default reducers