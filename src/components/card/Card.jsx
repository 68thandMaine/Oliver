import React from 'react';
import PropTypes from 'prop-types';
import CardBody from './body/CardBody';
import CardHeader from './header/CardHeader';

function Card( props ) {

    function renderHeader() {
        if(props.cardTitle) return (
            <CardHeader 
                title={props.cardTitle}/>
        );
    }

    return (
        <article>
            {renderHeader()}
            <CardBody>
                {props.children}
            </CardBody>
        </article>
    )
};

Card.propTypes = {
    cardTitle: PropTypes.string,
};

export default Card;