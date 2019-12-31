// Important Stuff
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// API Stuff
import { getBankAccounts } from './actions/BankAccountActions';
// Router Stuff
import Routes from './routes/Routes';
// Styling Stuff
import './App.css';
import StyleSheet from './styles/stylesheet';

function App(props) {

  useEffect(() => {
    props.dispatch(getBankAccounts());
  },[props]);

  return (
    <div className="App">
      {/* <Routes />  */}
      
       <StyleSheet />
    </div>
  );
}

export default connect()(App);
