import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PieChart from './pie_chart/PieChart';
import Histogram from './histogram/Histogram';
import LineGraph from './line_graph/LineGraph';


function Graphs(props) {
	console.log(props)
	// write a test for this function
	function displayGraph() {
		let graphToShow;
		switch (props.graphType) {
			case 'line':
				graphToShow = <LineGraph />;
				break;
			case 'histogram':
				graphToShow = <Histogram />;
				break;
			case 'donut':
				graphToShow =	<PieChart />;
				break;
			default:
				graphToShow = null;
		}
		return graphToShow;
	}

  return (
    <div className='container'>
      {displayGraph()}
    </div>
  );
}

Graphs.propTypes = {
	graphType: PropTypes.string.isRequired,
};

export default Graphs;