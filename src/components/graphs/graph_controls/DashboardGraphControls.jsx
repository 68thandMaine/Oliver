import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '../../button/Button';

function DashboardGraphControls(props) {
  
  useEffect(() => {
    // toggleActiveControl();
  });

  // function toggleActiveControl() {
  //   if(document.querySelector('.active')) { document.querySelector('.active').classList.remove('active') }
  //   document.getElementById(props.activeControl).classList.add('active');
  // }

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
    <section className='flex flex-row items-center justify-around px-4 py-2 m-2'>
      {showControls(props.dashboardGraphOptions)}
    </section>
  )
}

DashboardGraphControls.propTypes = {
  dashboardGraphOptions: PropTypes.array.isRequired,
  switchGraph: PropTypes.func.isRequired
}

export default DashboardGraphControls;