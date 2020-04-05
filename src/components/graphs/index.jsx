import React, { useEffect } from 'react';
import * as d3 from 'd3';
import dashboardGraphOptions
 from '../../config/dashboardGraphs.json'

import BarChart from './BarChart';
// import Circles from './Circles';
import DashboardGraphControls from './graph_controls/DashboardGraphControls';
import PieChart from './pie_chart/PieChart';

function Graphs(props) {

  useEffect(() => {
    showGraph()
  }, [])

  function showGraph(comparison) {
    switch (comparison) {
      case "paycheckBreakdown":
        return <PieChart /> 
      case "savingsVsBills":
        return <PieChart />;
      case "totalDebt":  
        return <h1>line graph</h1>;
      case "bills":
        return <BarChart />
      default:
        return <PieChart />
      }
  }
  return (
    <div className='container'>
      {showGraph()}
      <DashboardGraphControls dashboardGraphOptions={dashboardGraphOptions} changeGraph={showGraph}/>
    </div>
  )
}

export default Graphs;