import {
    SET_PIE_CHART_VALUE,
    SET_PIE_CHART_VALUE_SUCCESS,
    SET_PIE_CHART_VALUE_FAILURE,
    GET_PIE_CHART_VALUE
} from '../../../constants/actionTypes'


  const INIT_STATE = {
    val1: 0,
    val2: 0,
    error: false
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case GET_PIE_CHART_VALUE:
        return { ...state };
  
      case SET_PIE_CHART_VALUE:
        return {
            ...state,
            val1: action.payload.val1,
            val2: action.payload.val2
        };
      
      case SET_PIE_CHART_VALUE_SUCCESS:
        return { ...state, error: false };
  
      case SET_PIE_CHART_VALUE_FAILURE:
        return { ...state, loading: true, error: action.payload };
  
      default: return { ...state, error: true };
    }
  }
  