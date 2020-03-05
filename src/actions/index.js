export const CHANGE_CALENDAR_DAY = 'CHANGE_CALENDAR_DAY';

export const changeCalendarDay = (data) => {
  return {
    type: CHANGE_CALENDAR_DAY,
    payload: data
  };
};
