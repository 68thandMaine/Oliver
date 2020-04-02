import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import BarChart from './BarChart';
import Circles from './Circles';
import PieChart from './pie_chart/PieChart';

function Graphs(props) {
  

  return (
    <div className = 'container'>
      {/* <BarChart /> */}
      {/* <Circles /> */}
      <PieChart />
    </div>
  )
}

export default Graphs;