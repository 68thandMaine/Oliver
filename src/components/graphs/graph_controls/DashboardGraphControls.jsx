import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../button/IconButton';

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
          <IconButton 
            iconName={option.iconName}
            iconSize={'2x'}
            testingId={option.identifier}
            name={option.name}/>
        )
      })
    } 
    
  return (
    <section className='dashboard__graphControls'>
      {showControls(props.dashboardGraphOptions)}
    </section>
  )
}

DashboardGraphControls.propTypes = {
  dashboardGraphOptions: PropTypes.array.isRequired,
  switchGraph: PropTypes.func.isRequired
}

export default DashboardGraphControls;