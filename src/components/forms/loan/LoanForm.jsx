import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Button from '../../button/Button';
import LabeledInput from '../../input/LabeledInput';

import './LoanForm.scss';

const LoanForm = (props) => {
    const [loanForm,
        setLoanFormProps] = useState({});

    return (
        <form className='container'>
					<LabeledInput
						labelText="Name of the Loan"
						inputType="text"
						name="loanName"
						testingId="loanNameInput"
						styling="input--txt"
						placeHolderText="Epicodus loan"
						/>

					<LabeledInput
						labelText="Lender Name"
						inputType="text"
						name="lenderName"
						testingId="lenderNameInput"
						styling="input--txt"
						placeHolderText="Climb Credit"
						/>
					
					<LabeledInput
						labelText="Type of Loan"
						inputType="text"
						name="loanType"
						testingId="loanTypeInput"
						styling="input--txt"
						placeHolderText="Education"
						/>            

            <div className='container__row'>
							<LabeledInput
								labelText="Loan Amount"
								inputType="number"
								name="loanAmount"
								testingId="loanAmountInput"
								styling="input--num"
								placeHolderText="13000"
							/>
              
							<LabeledInput
								labelText="APY"
								inputType="number"
								name="loanAPY"
								testingId="loanAPYInput"
								styling="input--num"
								placeHolderText="13"
							/>

						<LabeledInput
							labelText="Initial Balance"
							inputType="number"
							name="loanBalance"
							testingId="loanBalanceInput"
							styling="input--num"
							placeHolderText="1299"
						/>
                
            </div>

            <Button
                text='submit'
                buttonStyle='greenPill'
                clickEvent=
                {()=>console.log('loannnnnnn')}/>
        </form>
    );
}
LoanForm.propTypes = {};

export default LoanForm;