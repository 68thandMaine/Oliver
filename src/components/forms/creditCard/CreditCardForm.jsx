import React from 'react';
import PropTypes from 'prop-types';


import Button from '../../button/Button';
import LabeledInput from '../../input/LabeledInput';



const CreditCardForm = (props) => {

    return (
						<form>
								<LabeledInput
									labelText="Credit Card Name"
									inputType="text"
									name="creditCardProvider"
									testingId="creditCardNameInput"
									placeHolderText="Discover Card"
									styling="input--txt" />
                     
									<LabeledInput
										labelText="Card Number"
										inputType="number"
										name="creditCardNumber"
										testingId="creditCardNumberInput"
										placeHolderText="1234567"
										styling="input--num" />
                    
									<LabeledInput
										labelText="Credit Limit"
										inputType="number"
										name="creditLimit"
										testingId="creditLimitInput"
										placeHolderText="50000"
										styling="input--num" />
                    
									<LabeledInput
										labelText="APY"
										inputType="number"
										name="apy"
										testingId="apyInput"
										placeHolderText="20"
										styling="input--num" />
                    
								<LabeledInput
											labelText="Initial Balancer"
											inputType="number"
											name="creditCardBalance"
											testingId="creditCardBalanceInput"
											placeHolderText="1232"
											styling="input--num" />
                <Button
                    text='submit'
                    buttonStyle='w-1/2'
                    clickEvent=
                    {(e) => console.log('hi')}
                    testingId='newCreditCard'/>
            </form>
        
    );
}

CreditCardForm.propTypes = {}

export default CreditCardForm;