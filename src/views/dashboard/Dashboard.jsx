import React from 'react';
import { connect } from 'react-redux';

import initialState from '../../constants';

// import PropTypes from 'prop-types';

import './Dashboard.css';
import Card from '../../components/styles/card/Card';
import Form from '../../components/forms';

const state = initialState.initialState;

function Dashboard(props) {


  return (

    <div className='container--fluid'>
      <div className='container__row'>
      <div className='container__col-sm-6'>
        <div>
          <h3>Dashboard Requirements</h3>
          <p>This is the dashboard view. It should have the following components:</p>
          <ul>
            <li>Income This Month</li>
            <li>Total amount of money available</li>
            <li>Available Credit</li>
            <li>Available Debit</li>
            <li>Total Savings</li>
            <li>Menu</li>
            <li>Form Options</li>
          </ul>
        </div>
        <Card 
          bankAccounts={props.bankAccounts}/>
      </div>
      <div className='container__col-sm-6'>
        <div className='container__row'>
          <h3>Section 2</h3>
          <p>This section will hold my graphs.</p> 
        </div>
        <div className='container__row'>
          <h3>Section 3</h3>
          <p>This section will be for controlling the graphs</p>
        </div>
        </div>
      </div>
  </div>

  );
}

const mapStateToProps = state => ({
  bankAccounts: state.bankAccounts,
});

export default connect(mapStateToProps)(Dashboard);