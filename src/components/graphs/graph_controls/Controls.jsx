import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../button/Button';

function Controls(props) {

  function showControls(options) {
    return options.map((option) => {
      return (
        <Button 
          key={option.identifier}
          buttonStyle="graph-control" 
          testingId={`${option}Button`} 
          clickEvent={props.showAnalysis(option.identifier)} 
          text={option.name}/>
        )
      })
    } 
  

  return (
    <div className='container graph-controls'>
      {showControls(props.dashboardGraphOptions)}
    </div>
  )
}

Controls.propTypes = {
  // dashboardGraphOptions: PropTypes.object.isRequired
}

export default Controls;