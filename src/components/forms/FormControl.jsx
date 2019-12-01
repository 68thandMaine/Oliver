import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import BankAccountForm from './bankAccount/NewBankAccount';

function FormControl(props) {

  const [ formToShow, setFormToShow ] = useState("");
  
  useEffect(() => {
    setFormToShow(props.formName)
  });

return (
  <div>
   {{
     newBankAccount: <BankAccountForm />,
   }[formToShow]}
  </div>
  )
}

FormControl.propTypes = {
  formName: PropTypes.string.isRequired,
};

export default FormControl;