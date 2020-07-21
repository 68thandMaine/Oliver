import React from 'react';
import PropTypes from 'prop-types';


import Button from '../../button/Button';
import LabeledInput from '../../input/LabeledInput';
import Card from '../../card/Card';



const CreditCardForm = (props) => {

    return (
			<section>
				<h1>New Credit Card</h1>
				<form>
					<section className="flex flex-row">
						<LabeledInput
							labelText="Credit Card Name"
							inputType="text"
							name="creditCardName"
							testingId="creditCardNameInput"
							placeHolderText="Discover Card"
							styling="input--txt" />
						<LabeledInput
							labelText="Credit Card Provider"
							inputType="text"
							name="creditCardProvider"
							testingId="creditCardProviderInput"
							placeHolderText="Discover Bank"
							styling="input--txt" />
						</section>
						<section className="flex">
							<LabeledInput
								labelText="Card Number"
								inputType="number"
								name="creditCardNumber"
								testingId="creditCardNumberInput"
								placeHolderText="1234567"
								styling="input--num" />
						</section>
						<section className="flex flex-row">
							<LabeledInput
								labelText="Credit Limit"
								inputType="number"
								name="creditLimit"
								testingId="creditLimitInput"
								placeHolderText="50000"
								styling="input--num" />
							<LabeledInput
								labelText="Initial Balancer"
								inputType="number"
								name="creditCardBalance"
								testingId="creditCardBalanceInput"
								placeHolderText="1232"
								styling="input--num" />
						</section>
						<section className="flex">
							<LabeledInput
								labelText="APY"
								inputType="number"
								name="apy"
								testingId="apyInput"
								placeHolderText="20"
								styling="input--num w-2" />
							</section>
						<Button
								text='submit'
								buttonStyle='w-1/2'
								clickEvent=
								{(e) => console.log('hi')}
								testingId='newCreditCard'/>
            </form>
					</section>        
    );
}

CreditCardForm.propTypes = {}

export default CreditCardForm;