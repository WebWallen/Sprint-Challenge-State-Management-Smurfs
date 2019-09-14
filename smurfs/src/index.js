import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { smurfReducer } from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(smurfReducer, applyMiddleware(thunk)); // Reducer comes before middleware

// "Store" is where the state data lives and it must be attached to a provider that connects react-redux

ReactDOM.render(
<Provider store={store}> 
<App />
</Provider>, 
document.getElementById('root'));
