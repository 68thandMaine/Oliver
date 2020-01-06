import React from 'react';
import PropTypes from 'prop-types';

function Balance(props) {

    return (
        <h3>{props.balance}</h3>
    );
};

Balance.propTypes = {
    balance: PropTypes.string.isRequired,
}

export default Balance;