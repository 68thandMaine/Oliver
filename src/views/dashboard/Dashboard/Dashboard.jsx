import React from 'react';
import { connect } from 'react-redux';

import initialState from '../../../constants';

// import PropTypes from 'prop-types';

import './Dashboard.scss';
import AccountMenu from '../../../components/account/AccountMenu';
import Graphs from '../../../components/graphs/index';
import NavBar from '../../../components/nav-bar/NavBar';
// const state = initialState.initialState;

function Dashboard(props) {


  return (
    <div className='container--fluid dashboard'>
      <div className='container__col-lg-6'>
        <Graphs graphDaa = {props.transactions} />
        <div className='container__col-sm-6 accounts'>  
          <AccountMenu accountType='bankAccount' accounts={props.bankAccounts}
            />
          <AccountMenu accountType='creditCard' accounts={props.creditCards} />  
        </div>
    

      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  bankAccounts: state.bankAccounts,
  creditCards: state.creditCards,
  transactions: state.transactions
});

export default connect(mapStateToProps)(Dashboard);