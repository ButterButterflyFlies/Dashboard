import {
    SET_PIE_CHART_VALUE,
    SET_PIE_CHART_VALUE_SUCCESS,
    SET_PIE_CHART_VALUE_FAILURE,
    GET_PIE_CHART_VALUE
} from '../../../constants/actionTypes'

export const setPieChartValue = (payload) => ({
    type: SET_PIE_CHART_VALUE,
    payload
})

export const setPieChartValueSuccess = (payload) => ({
    type: SET_PIE_CHART_VALUE_SUCCESS,
    payload
})

export const setPieChartValueFailure = (payload) => ({
    type: SET_PIE_CHART_VALUE_FAILURE,
    payload
})

export const getPieChartValueFailure = (payload) => ({
    type: GET_PIE_CHART_VALUE,
    payload
})