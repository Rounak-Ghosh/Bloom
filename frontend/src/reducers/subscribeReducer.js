const subscribeReducer = (state = { subscribeData: false, loading: true, error: false}, action) => {

      switch(action.type) {
            case "AUTH_START":
                  return {...state, loading: true, error: false };
            case "SUBSCRIBE_SUCCESS":
                  localStorage.setItem("profile", JSON.stringify({...action?.data}));
                  return {...state, subscribeData: action.data, loading: false, error: false };
            case "SUBSCRIBE_FAIL":
                  return {...state, loading: false, error: true};
            default:
                  return state;
      }
};

export default subscribeReducer;