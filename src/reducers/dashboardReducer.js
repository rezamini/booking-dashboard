import { CHANGE_CALENDAR_DAY, FETCH_DATA } from '../actions'

const initialState = {
    selectedDay: null,
    firebaseData: null,
}

const barChartReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch(action.type){
    case CHANGE_CALENDAR_DAY:
      return Object.assign({}, state, {
        selectedDay: [{data: action.payload}]
      })
    case FETCH_DATA:
      return Object.assign({}, state, {
        firebaseData: action.payload
      })
    default:
        return state;
  }
}

export default barChartReducer;
