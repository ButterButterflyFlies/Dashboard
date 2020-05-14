import { all } from 'redux-saga/effects'
// import pieChartValueSaga from './pieChartValue/saga'
export default function* rootSaga(getState) {

  yield all([
    // pieChartValueSaga(),
  ]);
}
