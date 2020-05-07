import {
    takeEvery,
    all
} from 'redux-saga/effects'

import {
    SET_PIE_CHART_VALUE
} from '../../../constants/actionTypes'

import {
    setPieChartValue
} from './action'


export default function* rootSaga() {
    yield all([
        takeEvery(SET_PIE_CHART_VALUE, setPieChartValue)
    ])
}
