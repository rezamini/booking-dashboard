import React, { useEffect } from 'react';
import DayPicker from 'react-day-picker';
import { useSelector, useDispatch } from 'react-redux';
import { changeCalendarDay } from '../../actions';
import 'react-day-picker/lib/style.css';

function DashboardMain() {
  const state = useSelector(state => state.dashboardReducer);
  const dispatch = useDispatch();


  const handleDayClick = (day, { selected }) => {
    console.log(day);
    console.log(selected);
    dispatch(changeCalendarDay(selected ? undefined : day));
  }

  return (
    <div>
      <DayPicker
        selectedDays={state.selectedDay}
        onDayClick={handleDayClick}
      />

    </div>

  );
}

export default DashboardMain;
