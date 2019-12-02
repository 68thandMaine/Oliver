import React from 'react'; 

import PropTypes from 'prop-types';

import './Input.css';

const Input = (props) => {

  return (    
    <div className='inputWrapper'>
      <input
      className={'input ' + props.styling}
      type={props.inputType}
      name={props.inputName} 
      value={props.inputValue}
      onChange={props.handleChange}
      placeholder={props.inputPlaceholder}
      />
    </div>
  );
}

Input.propTypes = {
  inputName : PropTypes.string.isRequired,
  inputType : PropTypes.string.isRequired,
  styling: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  inputPlaceholder: PropTypes.string,
  inputValue : PropTypes.string,
}

export default Input;