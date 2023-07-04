import * as SubscribeApi from "../api/SubscribeRequest";

export const subscribeUser = (id, isPaid) => async(dispatch) => {

      dispatch({type: "SUBSCRIBE_START"});
      
      try {
            const {data} = await SubscribeApi.subscribeUser(id, isPaid);
            console.log(data);
            dispatch({type: "SUBSCRIBE_SUCCESS", isPaid: data});
      } catch(error) {
            console.log(error);
            dispatch({type: "SUBSCRIBE_FAIL"});
      }
      
};