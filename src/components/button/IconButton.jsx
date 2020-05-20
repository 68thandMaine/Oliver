import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IconButton(props) {
  console.log(props)
  return (
    <section className='btn__icon'>
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
  name: PropTypes.string.isRequired
}

export default IconButton;