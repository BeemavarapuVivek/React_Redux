import { createStore } from "redux";


const  initialState = {
    contact:null,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADDCONTACT":
    return {
       ...state,
       contact: payload
       }

  default:
    return state;
  }
}

export default createStore(reducer);
