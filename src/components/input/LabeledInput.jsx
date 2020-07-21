import React  from 'react';
import PropTypes from 'prop-types';

const LabeledInput = (props) => {
	let classNames = () => props.styling ? `input ${props.styling}` : 'input'; 

	return (
		
			<label 
				className='label w-full m-2'
				htmlFor={props.name}
				data-cy={props.testingId}
			>{props.labelText}
			<input 
				id={props.name}
				className={classNames()} 
				placeholder={props.placeHolderText}
				name={props.inputName}
				type={props.inputType}
				data-cy={props.testingId}></input>
		</label>
	);
}

LabeledInput.propTypes = {
	labelText: PropTypes.string.isRequired,
	inputType: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	
	testingId: PropTypes.string,
	placeHolderText: PropTypes.string,
	styling: PropTypes.string,
};

export default LabeledInput;