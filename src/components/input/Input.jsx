import React, { useEffect } from 'react'; 
import PropTypes from 'prop-types';

const Input = (props) => {

  function toggleInput(props) {
    return ( props.textarea  ? <textarea></textarea> : <input
    className={'input ' + props.styling}
    type={props.inputType}
    name={props.inputName} 
    value={props.inputValue}
    onChange={props.handleChange}
    placeholder={props.inputPlaceholder}
  />
    )
  }
  return (    
    <div className='inputWrapper'>
      {{
        true: <textarea
          className={'input ' + props.inputStyle}></textarea>,
        undefined: <input
          className={'input ' + props.inputStyle}
          type={props.inputType}
          name={props.inputName} 
          value={props.inputValue}
          onChange={props.handleChange}
          placeholder={props.inputPlaceholder}
        />
      }[ props.textarea]}
    </div>
  );
}

Input.propTypes = {
  inputName : PropTypes.string.isRequired,
  inputType : PropTypes.string.isRequired,
  inputStyle: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  inputPlaceholder: PropTypes.string,
  inputValue : PropTypes.string,
  textarea : PropTypes.string,
}

export default Input;