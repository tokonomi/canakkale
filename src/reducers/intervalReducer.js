const initialState = {
    isRunning: false,
  };

const intervalReducer = (state = initialState, action) => {
    switch (action.type) {
      case "START_INTERVAL":
        return {
          ...state,
          isRunning: true,
        };
      case "STOP_INTERVAL":
        return {
          ...state,
          isRunning: false,
        };
      default:
        return state;
    }
  };
  
  export default intervalReducer;