import {createStore, combineReducers, applyMiddleware} from 'redux';
import castingsReducer from "./reducers/castingsReducer";
import thunk from "redux-thunk"
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
     castingsReducer,
     userReducer
})

const store =  createStore(rootReducer, applyMiddleware(thunk));

export default store;