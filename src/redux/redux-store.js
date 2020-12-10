import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer
})

let store = createStore(reducers);

export default store;