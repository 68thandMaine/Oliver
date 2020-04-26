import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDollars, formatAccountNumber } from '../../lib/formatters/AccountFormatters';

function AccountInfo(props) {
    return (
        <div className='container__row accountMenu__accountInfo'>
            <div className='container__col-4 hidden-xl-down'>
                <p className='text__small--italic'>{props.accountType}</p>
                <p>{formatAccountNumber(props.accountNumber)}</p>
            </div>
            <p>{formatDollars.format(props.accountBalance)}</p>
            <FontAwesomeIcon
                color='white'
                icon='angle-right'
                size='lg' />
        </div>
    );
}

AccountInfo.propTypes = {
    accountBalance: PropTypes.number.isRequired,
    accountId: PropTypes.number.isRequired,
    accountNumber: PropTypes.number.isRequired,
    accountType: PropTypes.string,

};

export default AccountInfo;