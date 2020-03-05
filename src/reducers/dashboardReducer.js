import { CHANGE_CALENDAR_DAY } from '../actions'

const initialState = {
    selectedDay: null,
}

const barChartReducer = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_CALENDAR_DAY:
      return Object.assign({}, state, {
        selectedDay: [{data: action.payload}]
      })
    default:
        return state;
  }
}

export default barChartReducer;
