import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
	function click() {
		if(props.clickEvent) props.clickEvent();
	}
  return (
    <button 
      id={`btn-${props.id}`}
      className={`btn ${props.buttonStyle}`}
      data-cy={`btn-${props.testingId}`}
      onClick={() => click()}
      >
        {props.text}
      </button>
  );
}

Button.propTypes = {
  text : PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired,
  clickEvent: PropTypes.func,
  testingId: PropTypes.string,
  id: PropTypes.string,
}

export default Button;