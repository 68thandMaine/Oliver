import types from '../../constants';
import initialState from '../../constants/InitialState'


const BankAccountReducer = ( state = initialState.BankAccount, action ) => {
  let newState;
  switch( action.type ) {
    case types.RECEIVE_BANKACCOUNTS: {
      newState = Object.assign ({}, state);
      return newState;
    }
    default:
      return state;
  }
};

export default BankAccountReducer;