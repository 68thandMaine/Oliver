import React  from 'react';
import PropTypes from 'prop-types';

const LabeledInput = (props) => {
	let classNames = () => props.styling ? `input ${props.styling}` : 'input'; 

	return (
		<>
			<label 
			className='label'
			htmlFor={props.identifier}
			data-cy={props.testingId}
			>{props.labelText}</label>
			<input 
				id={props.identifier}
				className={classNames()} 
				placeholder={props.placeHolderText}
				name={props.inputName}
				type={props.inputType}
				data-cy={props.testingId}></input>
		</>
	);
}

LabeledInput.propTypes = {
	labelText: PropTypes.string.isRequired,
	identifier: PropTypes.string.isRequired,
	inputName: PropTypes.string.isRequired,
	inputType: PropTypes.string.isRequired,
	testingId: PropTypes.string.isRequired,

	placeHolderText: PropTypes.string,
	styling: PropTypes.string,
};

export default LabeledInput;