import BankAccount from '../mock-data/mock-bankAccount';
import CreditCard from '../mock-data/mock-creditCard';
import Loan from '../mock-data/mock-loan';
import Transaction from '../mock-data/mock-transaction';
import NavOptions from './NavOptions.js';

const initialState = {
  BankAccount : BankAccount,
  CreditCard : CreditCard,
  Loan : Loan,
  Transaction: Transaction,
  NavOptions: NavOptions
};

export default initialState;