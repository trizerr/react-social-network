import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/redux-store";
import './index.css';
import App from './App';

let state = store.getState()
let render = (state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>

        </React.StrictMode>,
        document.getElementById('root')
    );

}
store.subscribe(() => {
    let state = store.getState();
    render(state);
});
render(state);




