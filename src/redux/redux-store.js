import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {UsersReducer} from "./UsersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    usersPage: UsersReducer
})

let store = createStore(reducers);
window.store=store;
export default store;