import {combineReducers} from "redux";
import { cartreducer, searchReducer } from "./reducer";


const rootred = combineReducers({
    cartreducer, searchReducer
});


export default rootred