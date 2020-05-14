// import { all, put, takeEvery, select } from 'redux-saga/effects'

// import {
//     SET_PIE_CHART_VALUE
// } from '../../constants/actionTypes'


// import {
//     setPieChartValue
// } from './action'

// import {
//     piechartValues
// }from './selector'

// function* setPieChartValueSaga(action) {

//     const params = yield select(piechartValues)
//     console.log(params)
//     const {name, value} = action.payload
//     params[name] = value
//     try {
//         yield put(setPieChartValue(params))
//         // yield put(setPieChartValueSuccess())
//     }
//     catch (err) {
//         console.log(err)
//         // yield put(setPieChartValueFalure(err))
//     }
// }

// export default function* rootSaga() {
//     yield all([
//         takeEvery(SET_PIE_CHART_VALUE, setPieChartValueSaga),
//     ])
// }
