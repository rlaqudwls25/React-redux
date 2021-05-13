import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

//cartReducer 업데이트 된 state에 접근하기 위해서는 cartReducer 키 값을 통해서 접근 가능
export default combineReducers({ cartReducer: cartReducer });
