import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IconButton(props) {

  return (
    <section className='btn__icon pl-6' id={props.identifier} onClick={()=>props.clickEvent(props.identifier)}>
      <FontAwesomeIcon 
        className='icon--white' 
        icon={props.iconName}
        size={props.iconSize}/>
      <Button 
        id={props.identifier}
        buttonStyle="graph-control" 
        testingId={`${props.identifier}`} 
        text={props.name}/>
    </section>
  )
}

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.string,
  identifier: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	clickEvent: PropTypes.func.isRequired,
}

export default IconButton;