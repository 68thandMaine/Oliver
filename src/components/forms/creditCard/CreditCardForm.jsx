import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../button';
import Input from '../../input';

import './CreditCardForm.scss';

const CreditCardForm = (props) => {

    return (
        <div className='card'>
            <form className='cc_formWrapper'>
                <div className='col'>
                    <label>Credit Card Provider</label>
                    <Input inputName='cc_provider' inputType='text' styling='txt'/>
                    <div className='row'>
                      <div className='col block'>
                        <label>Credit Card Name</label>
                        <Input inputName='cc_name' inputType='text' styling='txt'/>
                      </div>
                      <div className ='col block'>
                        <label>Credit Card Number</label>
                        <Input inputName='cc_number' inputType='number' styling='num'/>
                      </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col block'>
                        <label>Credit Limit</label>
                        <Input inputName='creditLimit' inputType='text' styling='txt'/>
                    </div>
                    <div className='col block'>
                        <label>APY</label>
                        <Input inputName='apy' inputType='number' styling='num'/>
                    </div>
                </div>
                        <label>Balance</label>
                        <Input inputName='balance' inputType='number' styling='num'/>
                <Button
                    text='submit'
                    buttonStyle='greenPill'
                    clickEvent=
                    {(e) => console.log('hi')}
                    testingId='newCreditCard'/>
            </form>
        </div>
    );
}

CreditCardForm.propTypes = {}

export default CreditCardForm;