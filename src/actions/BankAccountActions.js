import BankAccountService from '../services/BankAccountService';

import constants from '../constants';
const { action } = constants;

export function getBankAccounts() {
  return async function (dispatch) {
    try {
      const res = await BankAccountService.getAllBankAccounts();
      dispatch(receiveBankAccounts(res));
    } catch (err) {
      return err;
    }
  };
}


export function fetchBankAccounts() {
	return async function actions (dispatch) {
		// console.log(action.FETCH_BANKACCOUNTS)
		dispatch({ type: action.FETCH_BANKACCOUNTS });
		await BankAccountService.getAllBankAccounts()
		.then( res => console.log('in the closure'))
	
	}
}

export function receiveBankAccounts(bankAccountList) {
	console.log(bankAccountList)
  return {
    type: action.FETCH_BANKACCOUNTS_SUCCESS,
    bankAccounts: bankAccountList
  };
}

