import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
