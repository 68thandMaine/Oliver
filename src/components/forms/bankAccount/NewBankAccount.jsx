import React, { useState } from 'react';

import BankAccountService from '../../../services/BankAccountService';

import Button from '../../button/Button';
import LabeledInput from '../../input/LabeledInput';
import RadioButton from '../../input/RadioButton';


function NewBankAccount(props) {
  const [bankAccount, setBankAccountProps] = useState({});

	const bankAccountOptions = [
		{
			"labelText": "Checking Account",
			"name" : "checking",
			"group" : "accountType"
		},
		{
			"labelText": "Savings Account",
			"name" : "savings",
			"group" : "accountType"
		},
	];

  function createBankAccount(e) {
    e.preventDefault();
    BankAccountService.createBankAccount(bankAccount);
  }

  function handleInputChange(e) {
    e.persist();
    setBankAccountProps(bankAccount => ({...bankAccount, [e.target.name]: e.target.value}));
  }
    return (
			<section className="card">
				<h1 className='text-center'>Add a new bank account</h1>
        <form className='flex flex-col mx-16'>
					<section className="flex flex-row my-4">
						<LabeledInput
							labelText="Account Name"
							inputType="text"
							name="accountName"
							testingId="accountNameInput"
							placeHolderText="Apple FCU"
							styling="px-4 input--txt" />
						<LabeledInput
							labelText="Bank Name"
							inputType="text"
							name="bankName"
							testingId="bankNameInput"
							placeHolderText="Apple Federal Credit Union"
							styling="px-4 input--txt" />
					</section>
					<section className="flex flex-row my-4">
						<LabeledInput
							labelText="Account Number"
							inputType="number"
							name="accountNumber"
							testingId="accountNumberInput"
							placeHolderText="123456"
							styling="px-4 input--num " />
						<LabeledInput
							labelText="Routing Number"
							inputType="number"
							name="routingNumber"
							testingId="routingNumberInput"
							placeHolderText="123456"
							styling="px-4 input--num " />
					</section>
					<section className="flex flex-row my-4">
						<RadioButton
							labelText="Account Type"
							radioOptions={bankAccountOptions}	
							name="accountName"
							testingId="accountNameInput"
							placeHolderText="Apple FCU"
							styling="px-4 " />
						<LabeledInput
							labelText="Starting Balance"
							inputType="number"
							name="balance"
							testingId="balanceInput"
							placeHolderText="1000"
							styling="px-4 input--num" />
					</section>
					<section className="flex justify-center">
						<Button
								text='submit'
								id="submitBankAccount"
								buttonStyle="w-1/2 "
								clickEvent={createBankAccount}/>
						</section>
				</form>
		</section>        
	);
}

export default NewBankAccount;