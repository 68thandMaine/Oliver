import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = (props) => {

	return (
		<fieldset>
			<legend className="label--txt">{props.labelText}</legend>
				{
					props.radioOptions.map((option, index) => {
						return 	(
							<div className="">
								<input
									type="radio"
									id={option.name}
									name={option.group}
									value={option.name}
									className="mr-2"
								/>
								<label htmlFor={option.name}>{option.labelText}</label>
							</div>
						)
					})
				}
		</fieldset>
	)
}

RadioButton.propTypes = {
	labelText: PropTypes.string.isRequired,
	radioOptions: PropTypes.array.isRequired,
};

export default RadioButton;