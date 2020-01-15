import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../../../components/card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDollars } from '../../../formatters/AccountFormatters';
import './CreditCardMenu.scss';

function CreditCardMenu(props) {

    return (
        <div className='credCardMenu'>
            <Card
                cardTitle='Total Credit Available'>
                    <h1>$5000.00</h1>
            </Card>
        </div>
    );
}

const CredCardPropTypes = {
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
    credCards: PropTypes.arrayOf(PropTypes.shape(
        CredCardPropTypes
    )).isRequired
};

export default CreditCardMenu;