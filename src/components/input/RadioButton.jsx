import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = (props) => {
	const renderRadioGroup = () => {
		return (
			<>
				<input 
				id=""
				name=""
				type="radio" 
				value=""
				/>
				<label htmlFor=""></label>
			</>
		)
	}

	return (
		<>
			<p className="label--txt">{props.labelText}</p>
			{renderRadioGroup()}
		</>
	)
}

RadioButton.propTypes = {
	labelText: PropTypes.string.isRequired,
	values: PropTypes.array.isRequired
};

export default RadioButton;