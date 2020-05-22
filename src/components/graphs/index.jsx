import React from 'react';
import PropTypes from 'prop-types';
import PieChart from './pie_chart/PieChart';
import Histogram from './histogram/Histogram';
import LineGraph from './line_graph/LineGraph';


function Graphs(props) {

  return (
    <div className='container'>
      <LineGraph />
    </div>
  );
}

Graphs.propTypes = {
	graphType: PropTypes.string.isRequired,
};

export default Graphs;