import {messagesReducer} from "./messagesReducer";
import {profileReducer} from "./profileReducer";
export let store = {
    _state: {
        messagePage:{
            messagesData : [
                {who: "me", id: 1, text: "Hi"},
                {who: "friend", id: 2, text: "Hello"},
                {who: "me", id: 3, text: "Fine, you?"},
                {who: "friend", id: 4, text: "Learning React"}
            ],
            messagesPeopleData : [
                {name: "Denys", id: 1},
                {name: "Andrew", id: 2},
                {name: "Bogdan", id: 3}
            ],
            messageInput:''
        },
        profilePage:{
            postData : [
                {id: 1, message: "My first post", likesCount: 15},
                {id: 2, message: "Samurai path", likesCount: 11},
                {id: 3, message: "just another post", likesCount: 19}
            ],
            friends:[
                {name: "Denys", id: 1},
                {name: "Andrew", id: 2},
                {name: "ddd", id: 3},
                {name: "Andressaw", id: 4},
                {name: "Andddswrew", id: 5},
                {name: "Bogdan", id: 6}
            ],
            postInput:''
        }
    },
    getState(){
      return this._state;
    },
    setState(_state){
        this._state = _state;
    },
    _renderTree(){
        console.log('rendering')
    },
    dispatch(action){
        this._state.messagePage = messagesReducer(this._state.messagePage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._renderTree(this._state);
    },
    subscribe(observer){
        this._renderTree = observer;
    }
}
