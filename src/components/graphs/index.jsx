import React from 'react';
import PieChart from './pie_chart/PieChart';
import Histogram from './histogram/Histogram';
import LineGraph from './line_graph/LineGraph';


function Graphs(props) {

  return (
    <div className='container'>
      <LineGraph />
    </div>
  )
}

export default Graphs;