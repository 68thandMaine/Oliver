import React from 'react';
import PropTypes from 'prop-types';
import PieChart from './pie_chart/PieChart';
import Histogram from './histogram/Histogram';
import LineGraph from './line_graph/LineGraph';


function Graphs(props) {
	const chartMargins = { top: 50, right: 80, bottom: 100, left: 60 };
	const chartArea = { width: 750, height: 450 };

	// write a test for this function
	function displayGraph() {
		let graphToShow;
		switch (props.graphType) {
			case 'line':
				graphToShow = (
					<LineGraph
						dimensions={chartArea}
						margins={chartMargins} />	
				);
				break;
			case 'histogram':
				graphToShow = (
					<Histogram
						dimensions={chartArea}
						margins={chartMargins} />
				);
				break;
			case 'donut':
				graphToShow = (
					<PieChart
						dimensions={chartArea}
						margins={chartMargins} />
				)	
				break;
			default:
				graphToShow = null;
		}
		return graphToShow;
	}

  return displayGraph()
}

Graphs.propTypes = {
	graphType: PropTypes.string.isRequired,
};

export default Graphs;