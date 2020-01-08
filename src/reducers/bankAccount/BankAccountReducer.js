import types from '../../constants';
import initialState from '../../constants/InitialState'


const BankAccountReducer = ( state = initialState.BankAccount, action ) => {
  let newState;
  switch( action.type ) {
    case types.RECEIVE_BANKACCOUNT: {
      newState = Object.assign ({}, state);
      console.log(newState)
      // newState = action.bankAccounts;
      return newState;
    }
    default:
      return state;
  }
};

export default BankAccountReducer;