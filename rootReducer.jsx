import { combineReducers } from "redux";

import ClientsReducer from "./clients/ClientsReducer";



export default combineReducers({
  clients :   ClientsReducer, 
});
