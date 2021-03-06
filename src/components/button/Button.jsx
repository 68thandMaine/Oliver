import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
	function click() {
		if(props.clickEvent) props.clickEvent();
	}

	const classNames = () => {
		return (props.buttonStyle !== undefined) ? `btn ${props.buttonStyle}` : `btn`;
 	}
  return (
    <button 
      id={`btn-${props.id}`}
      className={classNames()}
      data-cy={`btn-${props.testingId}`}
      onClick={() => click()}
      >
				{props.children}
        {props.text}
      </button>	
  );
}

Button.propTypes = {
  text : PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
  clickEvent: PropTypes.func,
  testingId: PropTypes.string,
  id: PropTypes.string,
}

export default Button;