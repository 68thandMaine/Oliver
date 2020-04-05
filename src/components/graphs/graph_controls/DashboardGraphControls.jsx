import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '../../button/Button';
import { active } from 'd3';

function DashboardGraphControls(props) {

  useEffect(() => {
    const controls = document.getElementsByClassName('graph-control');
    controls[0].classList.add('active');
  })


  function setActiveButton(buttonId) {
    let activeButton = document.getElementsByClassName('active');
    activeButton[0].classList.remove('active');
    document.getElementById(buttonId).classList.add('active');
  }

  function showControls(options) {
    return options.map((option) => {
      return (
        <Button 
          key={option.identifier}
          id={option.identifier}
          buttonStyle="graph-control" 
          testingId={`${option.identifier}Button`} 
          clickEvent={()=>setActiveButton(option.identifier)} 
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
  changeGraph: PropTypes.func.isRequired
}

export default DashboardGraphControls;