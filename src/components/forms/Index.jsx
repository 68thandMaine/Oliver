import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import BankAccountForm from './bankAccount/BankAccountForm';
import CreditCardForm from './creditCard/CreditCardForm';
import LoanForm from './loan/LoanForm';
import TransactionForm from './transaction/TransactionForm';

function Index(props) {

  let [ formToShow, setFormToShow ] = useState("");
  
  useEffect(() => {
    setFormToShow(props.formName);
  }, [props] );

return (
  <div>
   {{
     newBankAccount: <BankAccountForm />,
     newCreditCard : <CreditCardForm />,
     newLoan : <LoanForm />,
     newTransaction: <TransactionForm />,
   }[formToShow]}
  </div>
  )
}

Index.propTypes = {
  formName: PropTypes.string.isRequired,
};

export default Index;