import React from 'react';
import ReactDOM from 'react-dom';

// import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'

// import reducer from './reducers'
// import mySaga from './sagas'


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';


// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// // mount it on the Store
// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// )

// // then run the saga
// sagaMiddleware.run(mySaga)


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
