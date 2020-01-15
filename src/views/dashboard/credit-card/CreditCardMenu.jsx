import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../../../components/card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDollars } from '../../../formatters/AccountFormatters';
import './CreditCardMenu.scss';

function CreditCardMenu(props) {

    const [ creditCards, modifyCreditCard ] = useState({});

    useEffect(() => {
        calculateTotalCredit()
    });

    function calculateTotalCredit() {
        let totalCreditAvailable = 0;
        for(let credit of props.creditCards) {
            totalCreditAvailable += credit.AvailableCash;
        } 
        modifyCreditCard({ availableCredit: totalCreditAvailable });
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
        <div className='credCardMenu'>
            <Card
                cardTitle='Total Credit Available'>
                <h1>{formatDollars.format(creditCards.availableCredit)}</h1>
            </Card>
            {props.creditCards.map((creditCard, index) => {
                return (
                    <Card
                        key={index}
                        cardTitle={creditCard.CC_Name}
                        >
                            <div className='container__row--no-wrap'>
                                <div className='container__col-lg-6'>
                                    <p>{formatAccountNumber(creditCard.CC_Number)}</p>
                                </div>
                                <div className='container__col-lg-3'>
                                <div className='container__col-lg-5'></div>
                <p className='text--bold'>{formatDollars.format(creditCard.CC_Balance)}</p>
                                </div>
                                <div className='container__col-lg-3'>
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
    );
}

const CreditCardPropTypes = {
    Id: PropTypes.number.isRequired,
    CC_Name: PropTypes.string.isRequired,
    CC_Provider: PropTypes.string.isRequired,
    CC_Balance: PropTypes.number.isRequired,
    APY: PropTypes.number.isRequired,
    AvailableCash: PropTypes.number.isRequired,
    Limit: PropTypes.number.isRequired,
    CC_Number: PropTypes.number.isRequired
};

CreditCardMenu.propTypes = {
    creditCards: PropTypes.arrayOf(PropTypes.shape(
        CreditCardPropTypes
    )).isRequired
};

export default CreditCardMenu;