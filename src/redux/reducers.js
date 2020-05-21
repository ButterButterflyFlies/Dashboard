import { combineReducers } from 'redux';

import pieChartValueReducer from './pieChartValue/reducer'
import themeColorReducer from './themeColor/reducer'

const reducers = combineReducers({
    pieChartValueReducer,
    themeColorReducer
})

export default reducers