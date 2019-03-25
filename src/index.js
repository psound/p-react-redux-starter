import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {loadState, saveState} from './sessionStorage';

import App from './App';
import './index.css';

const initialState = {}

const persistedState = loadState(initialState);


const enhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
	: f => f);

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
	saveState(store.getState());
});

ReactDOM.render(
  	<Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
