import React from 'react';
import PropTypes from 'prop-types';

function CardHeader(props) {

    return (
        <div className='cardHeader'>
            <p className='cardHeader__title'>
                {props.title}
            </p>
        </div>
    );
};

CardHeader.propTypes = {
    title: PropTypes.string.isRequired,
}

export default CardHeader;