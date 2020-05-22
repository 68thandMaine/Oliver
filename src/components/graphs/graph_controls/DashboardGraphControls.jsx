import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../button/IconButton';

function DashboardGraphControls(props) {
	// I think the opportunity to use a hash table is present in this file. 
	// Why not create a hash that uses the graph type as a key to return the different objects?
	//  That way we don't need to recompute each time something bubbles up from the IconButtton
	// Component. -->
  useEffect(() => {
    toggleActiveControl();
  });

  function toggleActiveControl() {
    if(document.querySelector('.active')) { 
			document.querySelector('.active').classList.remove('active') 
		}
		document.getElementById(props.activeControl).classList.add('active');
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
            iconSize={'2x'}
						testingId={option.identifier}
						clickEvent={clicked}
						/>
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
	selectGraphToView: PropTypes.func.isRequired,
}

export default DashboardGraphControls;