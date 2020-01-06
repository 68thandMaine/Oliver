import React from 'react';
import PropTypes from 'prop-types';
import Balance from './balance/Balance';
import CardBody from './body/CardBody';
import CardHeader from './header/CardHeader';
import './Card.scss';

function Card( props ) {

    return (
        <div className='cardWrapper'>
            <CardHeader 
                title={'props.cardTitle'}/>
            <Balance 
                balance={'props.accountBalance'} />
            <CardBody />
        </div>
    )
};

Card.propTypes = {
    // cardTitle: PropTypes.string.isRequired,
    // accountBalance: PropTypes.string.isRequired,
};

export default Card;