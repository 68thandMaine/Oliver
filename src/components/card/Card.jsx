import React from 'react';
import PropTypes from 'prop-types';
import CardBody from './body/CardBody';
import CardHeader from './header/CardHeader';

function Card( props ) {

    return (
        <div>
            <CardHeader 
                title={props.cardTitle}/>
            <CardBody>
                {props.children}
            </CardBody>
        </div>
    )
};

Card.propTypes = {
    cardTitle: PropTypes.string.isRequired,
    // accountBalance: PropTypes.string.isRequired,
};

export default Card;