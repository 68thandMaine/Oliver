import React from 'react';
import PropTypes from 'prop-types';


function Card( props ) {
    return (
    
      <section className='flex flex-col mx-3 sm:flex-row'>
				{props.children}
      </section>
   
    )
};

Card.propTypes = {
    cardTitle: PropTypes.string,
};

export default Card;