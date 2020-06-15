import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = (props) => {

	return (
		<>
			<p className="label--txt">{props.labelText}</p>
		</>
	)
}

RadioButton.propTypes = {
	labelText: PropTypes.string.isRequired,
	values: PropTypes.array.isRequired
};

export default RadioButton;