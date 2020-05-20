<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import dashboardGraphOptions
 from '../../config/dashboardGraphs.json'

// import BarChart from './BarChart';
<<<<<<< HEAD
=======
import React, { useEffect, useState } from 'react';
>>>>>>> c054928... WIP - dashboard control option layout updated
=======
>>>>>>> 72a8e54... DASHBOARD-redesign-layout: WIP remove unecessary files from graph dir
=======
import React, { useEffect, useState } from 'react';
>>>>>>> c054928... WIP - dashboard control option layout updated
import DashboardGraphControls from './graph_controls/DashboardGraphControls';
import PieChart from './pie_chart/PieChart';
import Histogram from './histogram/Histogram';
import LineGraph from './line_graph/LineGraph';


function Graphs(props) {

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
    </div>
  )
}

export default Graphs;