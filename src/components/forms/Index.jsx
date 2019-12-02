import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import BankAccountForm from './bankAccount/NewBankAccount';

function Index(props) {

  let [ formToShow, setFormToShow ] = useState("");
  
  useEffect(() => {
    setFormToShow(props.formName);
  }, [props] );

return (
  <div>
   {{
     newBankAccount: <BankAccountForm />,
   }[formToShow]}
  </div>
  )
}

Index.propTypes = {
  formName: PropTypes.string.isRequired,
};

export default Index;