import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Button from '../../button';
import Input from '../../input';

import './LoanForm.scss';

const LoanForm = (props) => {
    const [loanForm,
        setLoanFormProps] = useState({});

    return (
        <form className='container'>
            <label>Name of the loan</label>
            <Input
                inputName='loanName'
                inputType='text'
                inputStyle='txt'
                inputPlaceholder='Epicodus loan'/>

            <label>Lender Name</label>
            <Input
                inputName='loanProvider'
                inputType='text'
                inputStyle='txt'
                inputPlaceholder='Climb credit'/>

            <label>Type of loan</label>
            <Input
                inputName='loanType'
                inputType='text'
                inputStyle='txt'
                inputPlaceholder='Education'/>

            <div className='container__row'>
                <div className='container__col-sm-3 '>
                    <label>Loan Amount</label>
                    <Input
                        inputName='loanAmount'
                        inputType='number'
                        inputStyle='num'
                        inputPlaceholder='11,000'/>
                </div>
                <div className='container__col-sm-3 '>

                    <label>APY</label>
                    <Input
                        inputName='apy'
                        inputType='number'
                        inputStyle='num'
                        inputPlaceholder='12.2'/>
                </div>
                <div className='container__col-sm-3 '>
                    <label>Balance</label>
                    <Input
                        inputName='balance'
                        inputType='number'
                        inputStyle='num'
                        inputPlaceholder='9,000'/>
                </div>

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