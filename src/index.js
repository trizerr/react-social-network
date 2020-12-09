import React from 'react';
import ReactDOM from 'react-dom';
import {store} from "./redux/state";
import './index.css';
import App from './App';

let state = store.getState()
let render = (state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>

        </React.StrictMode>,
        document.getElementById('root')
    );

}
store.subscribe(render);
render(state);




