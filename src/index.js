import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers';
import 'tachyons';

const store = createStore(searchRobots)

ReactDOM.render(
	//create a provider, that uses our reducers and passes them down to all children
    <Provider store={store}>
    	<App />
  	</Provider>,
  document.getElementById('root')
)

//WORKING WITH REDUX
//1. Create an action.js file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
