const ADD_POST = 'ADD-POST';
const PAGE_INPUT_CHANGE = 'PAGE-INPUT-CHANGE';
const MESSAGE_INPUT_CHANGE = 'MESSAGE-INPUT-CHANGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
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
        debugger;
        switch(action.type){
            case ADD_POST:
                let object ={
                    id:4,
                    message:this._state.profilePage.postInput,
                    likesCount:1
                };
                this._state.profilePage.postData.push(object); // add new post
                this.dispatch({type:'PAGE-INPUT-CHANGE',text:''});
                this._renderTree(this._state);
                break;
            case PAGE_INPUT_CHANGE:
                this._state.profilePage.postInput=action.text; //update input text
                this._renderTree(this._state);
                break;
            case ADD_MESSAGE:
                let MESSAGE ={
                    who : 'me',
                    id:4,
                    text:this._state.messagePage.messageInput,
                };
                this._state.messagePage.messagesData.push(MESSAGE);
                this.dispatch({type:'MESSAGE-INPUT-CHANGE',text:''});
                this._renderTree(this._state);
                break;
            case MESSAGE_INPUT_CHANGE:
                this._state.messagePage.messageInput=action.text; //update messages input text
                this._renderTree(this._state);
                break;
        }
    },
    subscribe(observer){
        this._renderTree = observer;
    }
}
//profile actions
export let addPostActionCreator = () => ({type:ADD_POST})
export let pageInputChangeActionCreator = (text) =>
    ({type:PAGE_INPUT_CHANGE, text:text})

//messages actions
export let addMessageActionCreator = () => ({type:ADD_MESSAGE})
export let messageInputChangeActionCreator = (text) =>
    ({type:MESSAGE_INPUT_CHANGE, text:text})