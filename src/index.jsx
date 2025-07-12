import React from 'react'
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import configureStore from './redux/store';
import * as serviceWorker from './serviceWorker';

import '@Style/index.css';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <Provider store={configureStore()}>
        <Router>
            <App />
        </Router>
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
