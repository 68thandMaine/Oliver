import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IconButton(props) {
  return (
		<Button 
			id={props.identifier}
			buttonStyle={props.styling} 
			testingId={`${props.identifier}`} 
			text={props.name}
			clickEvent={props.clickEvent}>
				<FontAwesomeIcon 
					className='icon--white' 
					icon={props.iconName}
					size={props.iconSize}/>
			</Button>
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