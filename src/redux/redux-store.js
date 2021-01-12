import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {UsersReducer} from "./UsersReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    usersPage: UsersReducer,
    auth : authReducer,
    global:{
            'API-KEY': '960a5064-17c0-4d42-9bc1-fb960b99d4ff'
    }
})

let store = createStore(reducers, applyMiddleware(thunk));
window.state=store.getState();
export default store;