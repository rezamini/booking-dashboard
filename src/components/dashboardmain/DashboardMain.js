import React, { useEffect } from 'react';
import DayPicker from 'react-day-picker';
import { useSelector, useDispatch } from 'react-redux';
import { changeCalendarDay, addFirebaseData, removeFirebaseData, fetchFirebaseData, fetchData } from '../../actions';
import 'react-day-picker/lib/style.css';
import Button from 'react-bootstrap/Button'

function DashboardMain() {
  const state = useSelector(state => state.dashboardReducer);
  const dispatch = useDispatch();
  console.log(state);

  const handleDayClick = (day, { selected }) => {
    //dispatch(fetchData());
    dispatch(changeCalendarDay(selected ? undefined : day));
  }

  const addTestData = () => {
    dispatch(addFirebaseData({machineID: 1}));
  }

  const removeTestData = () => {
    //for testing need to add the ID manually
    dispatch(removeFirebaseData("-M1gOouKGI35eonAeA19"));
  }
  
  // useEffect(() => {
  //   //dispatch(fetchData());
  // });


  return (
    <div>
      <DayPicker
        selectedDays={state.selectedDay}
        onDayClick={handleDayClick}
      />
      <Button variant="primary" onClick={addTestData}>ADD</Button>
      <Button variant="danger" onClick={removeTestData}>REMOVE</Button>
    </div>

  );
}

export default DashboardMain;
