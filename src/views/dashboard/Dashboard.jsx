import React from 'react';

import initialState from '../../constants';

// import PropTypes from 'prop-types';

import './Dashboard.css';
import Form from '../../components/forms';

const state = initialState.initialState;

function Dashboard(props) {


  return (

    <div>
      {/* <div className='requirements'>
        <h1>Dashboard Requirements</h1>
        <p>This is the dasboard view. It should have the following components:</p>
        <ul>
          <li>Income This Month</li>
          <li>Total amount of money available</li>
          <li>Available Credit</li>
          <li>Available Debit</li>
          <li>Total Savings</li>
          <li>Menu</li>
          <li>Form Options</li>
        </ul>
      </div> */}

      <Form 
      formName='newLoan'/>
      <button onClick={()=>console.log(state)}>Click</button>
    </div>

  );
}

export default Dashboard;