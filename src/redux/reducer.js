import { LOAD_DATA, LOAD_SPECIFIC_DATE_DATA } from './actionTypes';

const covid19Reducer = (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.payload;
    case LOAD_SPECIFIC_DATE_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default covid19Reducer;
