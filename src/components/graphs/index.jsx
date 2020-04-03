import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import dashboardGraphOptions
 from '../../config/dashboardGraphs.json'

import BarChart from './BarChart';
import Circles from './Circles';
import Controls from './graph_controls/Controls';
import PieChart from './pie_chart/PieChart';

function Graphs(props) {
  function showGraph(comparison) {
    // switch (comparison)
      // case "paycheck_breakdown"
  }
  return (
    <div className='container'>
      {/* <BarChart /> */}
      {/* <Circles /> */}
      <PieChart />
      <Controls dashboardGraphOptions={dashboardGraphOptions} showAnalysis={showGraph}/>
    </div>
  )
}

export default Graphs;