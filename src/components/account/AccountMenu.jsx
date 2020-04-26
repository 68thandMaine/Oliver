import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AccountInfo from './AccountInfo';
import Card from '../card/Card';
import { formatDollars } from '../../lib/formatters/AccountFormatters';

import './AccountMenu.scss';

function AccountMenu({
    accountType,
    accounts
}) {
    let [ accountInformation, modifyAccountInformation ] = useState({});
    useEffect(() => {
        determineBalance();
        // determineHeader()
    });

    function determineHeader() {
        switch(accountType) {
            case 'bankAccount':
                return 'Bank Account Total:';
            case 'creditCard':
                return 'Credit Available: ';
            default:
                return '';
        }
    }

    function determineBalance() {
        let total = 0;
        for(let account of accounts) {
            total += account.AvailableCash;
        }
        modifyAccountInformation({ available: total });
    }

    function displayAccountInfo(account) {
        switch (accountType) {
            case 'bankAccount':
                return (
                    <AccountInfo 
                        accountBalance={account.Balance}
                        accountId={account.Id}
                        accountName={account.AccountName}
                        accountNumber={account.AccountNumber}
                        accountType={account.AccountType}
                    />  
                );
                case 'creditCard':
                    return (
                        <AccountInfo
                            accountBalance={account.CC_Balance}
                            accountId={account.Id}
                            accountName={account.CC_Name}
                            accountNumber={account.CC_Number}
                        />
                );
            default:
                return null;
        }
    }

    return (
        <div className='card'>
            <Card cardTitle={determineHeader()}>
                <p>{formatDollars.format(accountInformation.available)}</p>
            </Card>
            {accounts.map((account, index) => {
                return (
                    <Card
                        key= {index}
                        cardTitle={(account.AccountName) ? account.AccountName : account.CC_Name}>
                            <div className='container__row--no-wrap accountMenu__account'>
                                <div className='container__col-md-12'>
                                    {displayAccountInfo(account)}
                                </div>
                            </div>
                    </Card>
                );
            })}
       </div> 
    );
}

AccountMenu.propTypes = {
    accountType: PropTypes.string.isRequired,
    accounts: PropTypes.array.isRequired
}

export default AccountMenu;