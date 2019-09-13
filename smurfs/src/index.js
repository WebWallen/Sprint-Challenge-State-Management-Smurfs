import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { smurfReducer } from './reducers/index';

// Step 1: install dependencies (redux, react-redux, axios, and redux-thunk)
// Step 2: import { createStore } from redux and { Provider } from react-redux
// Step 3: Wrap app with <Provider store={store}>

const store = createStore(smurfReducer);

// Step 6: set const store to createStore(reducer)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));
