import types from '../../constants';

const BankAccountReducer = ( state = {}, action ) => {
  let newState;
  switch( action.type ) {
    case types.RECEIVE_BANKACCOUNT: {
      newState = Object.assign ({}, state);
      newState = action.bankAccounts;
      return newState;
    }
    default:
      return state;
  }
};

export default BankAccountReducer;