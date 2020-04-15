import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '../../button/Button';
import { active } from 'd3';

function DashboardGraphControls(props) {
  
  useEffect(() => {
    if(document.querySelector('.active')) { document.querySelector('.active').classList.remove('active') }
    document.getElementById(props.activeControl).classList.add('active');
  })

  function showControls(options) {
    return options.map((option) => {
      return (
        <Button 
          key={option.identifier}
          id={option.identifier}
          buttonStyle="graph-control" 
          testingId={`${option.identifier}Button`} 
          clickEvent={() => props.switchGraph(option)} 
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

DashboardGraphControls.propTypes = {
  dashboardGraphOptions: PropTypes.array.isRequired,
  switchGraph: PropTypes.func.isRequired,
  activeControl: PropTypes.string.isRequired,
}

export default DashboardGraphControls;