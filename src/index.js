// React Stuff
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Store Stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
// Router Stuff
import { BrowserRouter as Router } from 'react-router-dom';
// Component
import App from './App';
// Styling Stuff
import './index.scss';
import './styles/fonts.scss';
import './styles/grid-system.scss';
import './styles/surfaces.scss';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  , document.getElementById('root')
);

if (window.Cypress) {
  window.store = store;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
