import { combineReducers } from 'redux';
import BankAccountReducer from './bankAccount/BankAccountReducer.js';
import CreditCardReducer from './creditCard/CreditCardReducer';
import TransactionReducer from './transaction/TransactionReducer.js';

const rootReducer = combineReducers({
  bankAccounts : BankAccountReducer,
  creditCards : CreditCardReducer,
  transactions : TransactionReducer,
});

export default rootReducer;