import React from 'react';
import { connect } from 'react-redux';

import initialState from '../../constants';

// import PropTypes from 'prop-types';

import './Dashboard.scss';
import AccountMenu from '../../components/account/AccountMenu';
import Graphs from '../../components/graphs';

// const state = initialState.initialState;

function Dashboard(props) {


  return (

    <div className='container--fluid dashboard'>
      <div className='container__row'>
      <div className='container__col-sm-6 accounts'>
        {/* <div>
          <h3>Dashboard Requirements</h3>
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
        <AccountMenu
          accountType='bankAccount'
          accounts = {props.bankAccounts}
          />

        <AccountMenu
          accountType='creditCard'
          accounts = {props.creditCards}
          />  
      </div>
      <div className='container__col-sm-6'>
        <div className='container__row'>
          <p>This section will hold my graphs.</p> 
          <Graphs />
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
  creditCards: state.creditCards,
});

export default connect(mapStateToProps)(Dashboard);