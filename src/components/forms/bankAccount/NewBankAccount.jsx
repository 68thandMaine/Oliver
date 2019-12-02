import React, { useState } from 'react';

import BankAccountService from '../../../services/BankAccountService';

import Button from '../../button';
import Input from '../../input';

import './NewBankAccount.css';

function NewBankAccount(props) {
  const [bankAccount, setBankAccountProps] = useState({});

  function createBankAccount(e) {
    e.preventDefault();
    BankAccountService.createBankAccount(bankAccount);
  }

  function handleInputChange(e) {
    e.persist();
    setBankAccountProps(bankAccount => ({...bankAccount, [e.target.name]: e.target.value}));
  }
    return (
        <form className='card bankAccountForm'> 
        <label>Account Name</label>
          <Input
              inputType='text'
              inputName='accountName'
              styling='newForm'
              handleChange={handleInputChange}
              inputPlaceholder='Spending Account'/>
          <label>Account Number</label>
          <Input
              inputType='number'
              inputName='accountNumber'
              styling='newForm'
              handleChange={handleInputChange}
              inputPlaceholder='123456789'/>
          <label>Bank Name</label>
          <Input
              inputType='text'
              inputName='bankName'
              styling='newForm'
              handleChange={handleInputChange}
              inputPlaceholder='Chase...etc'/>
          <label>Routing Number</label>
          <Input
              inputType='number'
              inputName='Routing Number'
              styling='newForm'
              handleChange={handleInputChange}
              inputPlaceholder='R123456'/> 
          <label>Account Type</label>
          <Input
              inputType='text'
              inputName='accountType'
              styling='newForm'
              handleChange={handleInputChange}
              inputPlaceholder='Checking or Savings'/>
          <label>Account Type</label>
          <Input
              inputType='number'
              inputName='apy'
              styling='newForm'
              handleChange={handleInputChange}
              inputPlaceholder='3.3'/>
          <label>Balance</label>
          <Input
              inputType='number'
              inputName='balance'
              styling='newForm'
              handleChange={handleInputChange}
              inputPlaceholder='3000'/>
            <div className='row'> 
            <Button
                text='submit'
                buttonStyle="greenPill"
                clickEvent={createBankAccount}/>
              </div>
        </form>
    );
}

export default NewBankAccount;