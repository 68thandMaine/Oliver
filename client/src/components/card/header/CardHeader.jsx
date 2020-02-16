import React from 'react';
import PropTypes from 'prop-types';


function CardHeader(props) {

    return (
        <p className='text--bold'>
            {props.title}
        </p>
    );
};

CardHeader.propTypes = {
    title: PropTypes.string.isRequired,
}

export default CardHeader;