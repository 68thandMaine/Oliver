import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import dashboardGraphOptions
 from '../../config/dashboardGraphs.json'

// import BarChart from './BarChart';
import Circles from './Circles';
import DashboardGraphControls from './graph_controls/DashboardGraphControls';
import PieChart from './pie_chart/PieChart';
import Histogram from './histogram/Histogram';


function Graphs(props) {
  const defaults = {
    identifier: dashboardGraphOptions[0].identifier,
    graphType: dashboardGraphOptions[0].graphType,
    name: dashboardGraphOptions[0].name,
  }
  const [ graphData, setGraphData ] = useState(defaults);

  function showGraph() {
    switch (graphData.identifier) {
      case "paycheckBreakdown":
        return <PieChart 
                  title={graphData.name} /> 
      case "savingsVsBills":
        return <PieChart 
                  title={graphData.name} />
      case "totalDebt":  
        return <Histogram />
      case "bills":
        return <Circles 
                  title={graphData.name} />
      default:
        return null;
      }
  }
  return (
    <div className='container'>
      {showGraph()}
      <DashboardGraphControls
        dashboardGraphOptions={dashboardGraphOptions} 
        switchGraph={setGraphData} 
        activeControl={graphData.identifier} />
    </div>
  )
}

export default Graphs;