import { all, fork, put,  delay} from 'redux-saga/effects'

import {
    CLOCK_1S_TICK
} from '../../constants/actionTypes'


import {
    clockTick
} from './action'

function* clockTickSaga(action) {
    while (1) {
        yield delay(1000)
        yield put(clockTick())
    }
}

export default function* rootSaga() {
    yield all([
        fork(clockTickSaga)
    ])
}
