import {firebaseRef} from '../firebase';
export const CHANGE_CALENDAR_DAY = 'CHANGE_CALENDAR_DAY';
export const FETCH_DATA = 'FETCH_DATA';


export const addFirebaseData = data => async dispatch => {
  firebaseRef.push().set(data);
};

export const removeFirebaseData = data => async dispatch => {
  firebaseRef.child(data).remove();
};


// export const fetchData = () => async dispatch => {
//   return dispatch => {
//   const tasks = [];
//   database.ref(`/`).once('value', snap => {
//        snap.forEach(data => {
//          let task = data.val();
//          tasks.push(task)
//        })
//     })
//   .then(() => dispatch(getTasks(tasks)))
//   }
// };


export const fetchData = () => async dispatch => {
  
  firebaseRef.on("value", snapshot => {
    dispatch({
      type: FETCH_DATA,
      payload: snapshot.val()
    });
  });
};

export const changeCalendarDay = (data) => {
  return {
    type: CHANGE_CALENDAR_DAY,
    payload: data
  };
};
