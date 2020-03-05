import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';

const allReducers = combineReducers({
  dashboardReducer
});

export default allReducers;
