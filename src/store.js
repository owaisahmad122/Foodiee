import { applyMiddleware, createStore } from "redux";
import rootred from "./redux/reducers/main";
import {thunk} from 'redux-thunk';


const store = createStore(
    rootred,applyMiddleware(thunk)
);


export default store;