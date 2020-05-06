import { all } from 'redux-saga/effects'
import getChartValueSaga from './chartValues/getPieChartValue/saga.js'
export default function* rootSaga(getState) {

  yield all([
    getChartValueSaga(),
  ]);
}
