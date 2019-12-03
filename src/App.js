// Important Stuff
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// API Stuff
import { getBankAccounts } from './actions/BankAccountActions';
// Router Stuff
import Routes from './routes/Routes';
// Styling Stuff
import './App.css';

function App(props) {

  useEffect(() => {
    props.dispatch(getBankAccounts());
  },[props]);

  return (
    <div className="App">
      <Routes /> 
    </div>
  );
}

export default connect()(App);
