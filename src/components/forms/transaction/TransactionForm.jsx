import React, {useState} from 'react';

import Button from '../../button';
import Input from '../../input';

import './TransactionForm.css';

function TransactionForm(props) {

    let [transaction,
        setTransactionProperties] = useState({});

    function handleCreateTransaction(e) {
        e.preventDefault();
        console.log('create transaction', transaction);
    }

    function handleInputChange(e) {
        e.persist();
        setTransactionProperties(transaction => ({
            ...transaction,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <form className='card transactionForm'>
            <h1>New Transaction</h1>
            <div className='col'>
                <label>Date</label>
                <Input
                    inputType='date'
                    inputName='date'
                    styling='newForm'
                    handleChange={handleInputChange}/>
                <label>Category</label>
                <Input
                    inputType='string'
                    inputName='category'
                    styling='newForm'
                    handleChange={handleInputChange}/>
            </div>
            <div className='col'>
                <label>Description</label>
                <Input
                    inputType='string'
                    inputName='transactionDescription'
                    styling='newForm'
                    handleChange={handleInputChange}
                    textarea='true'/>
                <label>Amount</label>
                <Input
                    inputType='number'
                    inputName='amount'
                    styling='newForm'
                    handleChange={handleInputChange}/>
            </div>


            <label>Payment source</label>
            <select>
                <option>Debit card</option>
                <option>Credit card</option>
                <option>Bank account</option>
            </select>

            <Button
                text='Log Transaction'
                buttonStyle='greenPill'
                clickEvent={handleCreateTransaction}/>

        </form>
    );
}

export default TransactionForm;