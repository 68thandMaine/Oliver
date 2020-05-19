import React, { useState } from 'react';
import dashboardGraphOptions
 from '../../config/dashboardGraphs.json'

// import BarChart from './BarChart';
import DashboardGraphControls from './graph_controls/DashboardGraphControls';
import PieChart from './pie_chart/PieChart';
import Histogram from './histogram/Histogram';
import LineGraph from './line_graph/LineGraph';


function Graphs(props) {
  const defaults = {
    identifier: dashboardGraphOptions[1].identifier,
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
        return <LineGraph />
      case "totalDebt":  
        return <Histogram />
      
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