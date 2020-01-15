import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../../../components/card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BankAccountMenu.scss';
import { formatDollars } from '../../../formatters/AccountFormatters';

function BankAccountMenu(props) {

    const [ bankAccounts, setBankAccountStatus ] = useState({});
    
    useEffect(() => {
        accountTotal();
    });

    function accountTotal() {
        let bankAccountsTotal = 0;
        for(let i = 0; i < props.bankAccounts.length; i += 1) {
            bankAccountsTotal = bankAccountsTotal + props.bankAccounts[i].Balance
        }
        setBankAccountStatus({ sumTotal: bankAccountsTotal });
    }

    function formatAccountNumber(accountNumber) {
        let account = accountNumber.toString();
        let formattedNumber = [];
        for(let i = 0; i < account.length - 4; i += 1 ){
            formattedNumber.push('*');
        }
        return formattedNumber.join('') + account.substring(account.length - 4);
    }

    return (
        <div className='bankAccountMenu'>
            <Card
                cardTitle='Total In All Bank Accounts' >
                <h1>{formatDollars.format(bankAccounts.sumTotal)}</h1>
            </Card>
            {props.bankAccounts.map((bankAccount, index)=> {
                return (
                <Card
                    key={index}
                    cardTitle={bankAccount.AccountName}
                    >
                    <div className='container__row--no-wrap bankAccountMenu__account'>
                        <div className='container__col-lg-6 bankAccountMenu__accountInfo'>
                            <p>{bankAccount.AccountType}</p>
                            <p>{formatAccountNumber(bankAccount.AccountNumber)}</p>
                        </div>
                        {/* <div className='container__col-lg-5'></div> */}
                        <div className='container__col-lg-3 bankAccountMenu__balanceInfo'>
                            <p className='text--bold'>{formatDollars.format(bankAccount.Balance)}</p>
                        </div>
                        <div className='container_col-lg-3 '>
                            <FontAwesomeIcon
                                    color='white' 
                                    icon='angle-right'
                                    size='lg' />
                        </div>
                    </div>
                </Card>
                )
            })}
        </div>
    )
}


const BankAccountPropTypes = {
    Id: PropTypes.number.isRequired,
    AccountName: PropTypes.string.isRequired,
    BankName: PropTypes.string.isRequired,
    AccountType: PropTypes.string.isRequired,
    RoutingNumber: PropTypes.number.isRequired,
    AccountNumber: PropTypes.number.isRequired,
    Balance: PropTypes.number.isRequired,
    AvailableCash: PropTypes.number.isRequired
}

BankAccountMenu.propTypes = {
    bankAccounts: PropTypes.arrayOf(PropTypes.shape(
        BankAccountPropTypes
    )).isRequired
};

export default BankAccountMenu;