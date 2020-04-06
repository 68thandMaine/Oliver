import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button 
      id={props.id}
      className={`btn ${props.buttonStyle}`}
      data-cy={props.testingId}
      onClick={() => props.clickEvent()}
      >{props.text}</button>
  );
}

Button.propTypes = {
  text : PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
  testingId: PropTypes.string,
  id: PropTypes.string,
}

export default Button;