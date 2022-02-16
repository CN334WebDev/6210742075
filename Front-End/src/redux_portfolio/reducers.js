import {
    CREATE_DATA,
    RETRIEVE_DATA,
    UPDATE_DATA,
    DELETE_DATA,
  } from "./actionTypes";
  
  const initialState = [];
  
  function petReducer(portfolio = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_DATA:
        return [...portfolio, payload];
  
      case RETRIEVE_DATA:
        return payload;
  
      case UPDATE_DATA:
        return portfolio.map((portfolio) => {
          if (portfolio.id === payload.id) {
            return {
              ...portfolio,
              ...payload,
            };
          } else {
            return portfolio;
          }
        });
  
      case DELETE_DATA:
        return portfolio.filter(({ id }) => id !== payload.id);
  
      default:
        return portfolio;
    }
  }
  
  export default petReducer;
  