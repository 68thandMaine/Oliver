import { combineReducers } from 'redux';
import BankAccountReducer from './bankAccount/BankAccountReducer.js';
import CreditCardReducer from './creditCard/CreditCardReducer';

const rootReducer = combineReducers({
  bankAccounts : BankAccountReducer,
  creditCards : CreditCardReducer,
});

export default rootReducer;