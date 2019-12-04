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
      
       {/* <ul>
         <li><h1>h1</h1></li>
         <li><h2>h2</h2></li>
         <li><h3>h3</h3></li>
         <li><h4>h4</h4></li>
         <li><h5>h5</h5></li>
         <li><h6>h6</h6></li>
         <li><p>p</p></li>
         <li><label>label</label></li>
         <li>li</li>
         <li><button>Button</button></li>
       </ul> */}
    </div>
  );
}

export default connect()(App);
