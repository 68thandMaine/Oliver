import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IconButton(props) {
  return (
		<button 
			id={props.identifier}
			className={`btn__icon ${props.styling}`}
			testingId={`${props.identifier}`} 
			clickEvent={props.clickEvent}>
				<FontAwesomeIcon 
					className='icon icon--white' 
					icon={props.iconName}
					size={props.iconSize}/>
					{props.name}
			</button>
  );
}

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.string,
  identifier: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	clickEvent: PropTypes.func.isRequired,
	styling: PropTypes.func.isRequired,
}

export default IconButton;