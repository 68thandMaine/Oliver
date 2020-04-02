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


export function receiveBankAccounts(bankAccountList) {
  return {
    type: action.RECEIVE_BANKACCOUNTS,
    bankAccounts: bankAccountList
  };
}

