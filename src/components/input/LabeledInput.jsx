import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const LabeledInput = (props) => {
	let classNames = () => props.styling ? `input input--txt ${props.styling}` : 'input input--txt'; 

	return (
		<Fragment>
			<label className='label'>Example</label>
			<input className={classNames()} placeholder=''></input>
		</Fragment>
	);
}

LabeledInput.propTypes = {
	styling: PropTypes.string
};

export default LabeledInput;