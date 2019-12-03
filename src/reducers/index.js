import { combineReducers } from 'redux';
import BankAccountReducer from './bankAccount/BankAccountReducer.js';

const rootReducer = combineReducers({
  bankAccounts : BankAccountReducer,
});

export default rootReducer;