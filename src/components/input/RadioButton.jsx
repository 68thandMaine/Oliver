import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = (props) => {

	return (
		<fieldset className="w-7/12 px-2">
			<legend className="label--txt">{props.labelText}</legend>
				{
					props.radioOptions.map((option, index) => {
						return 	(
							<label className="input__checkbox" htmlFor={option.name} key={index}>
								{option.labelText}
								<input
									type="checkbox"
									id={option.name}
									name={option.group}
									value={option.name}
									className="mr-2"
								/>
								<span className="input__checkbox--check"></span>
							</label>
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

