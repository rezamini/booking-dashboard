export const SET_PIE_SERIES = 'SET_PIE_SERIES';

export const setPieSeries = (dataSeries) => {
  return {
    type: SET_PIE_SERIES,
    payload: dataSeries
  };
};
