import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/redux-store";
import './index.css';
import App from './App';
import {Provider} from "react-redux";

let state = store.getState()
let render = (state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <Provider store = {store}>
                <App store={store}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
store.subscribe(() => {
    let state = store.getState();
    render(state);
});
render(state);




