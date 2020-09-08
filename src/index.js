import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import './common/css/index.css'

import {Provider} from 'react-redux'
import configStore from './store/configStore.js'


const store = configStore()
ReactDOM.render(
    <Provider
        store={store}
    >
        <App />
    </Provider>, 
    document.getElementById('root')
    );



