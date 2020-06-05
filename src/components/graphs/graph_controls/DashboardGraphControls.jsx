import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../button/IconButton';

function DashboardGraphControls(props) {
	
  useEffect(() => {
    toggleActiveControl();
  });

  function toggleActiveControl() {
    if(document.querySelector('.active')) { 
			document.querySelector('.active').classList.remove('active') 
		}
		console.log(props)
		// document.getElementById(props.activeControl).classList.add('active');
  }

	function clicked(graphId) {
		const { dashboardGraphOptions } = props;
		for (let i = 0; i < dashboardGraphOptions.length; i += 1) {
			if(graphId === dashboardGraphOptions[i].identifier) props.selectGraphToView(dashboardGraphOptions[i]);
		}
	}
	
  function showControls(options) {
    return options.map((option, i) => {
      return (
          <IconButton
						key={i}
            name={option.name}
						identifier={option.identifier}
						iconName={option.iconName}
						styling={"btn__graphControl"}
            iconSize={'2x'}
						testingId={option.identifier}
						clickEvent={clicked}
						/>
						)
      })
    } 
    
  return (
    <section className='graphControls'>
      {showControls(props.dashboardGraphOptions)}
    </section>
  )
}

DashboardGraphControls.propTypes = {
	dashboardGraphOptions: PropTypes.array.isRequired,
	selectGraphToView: PropTypes.func.isRequired,
}

export default DashboardGraphControls;