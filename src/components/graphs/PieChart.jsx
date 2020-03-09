import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

function PieChart() {

  const data = [ 2, 4, 6, 8 ];
  const [ chartData, setChartData ] = useState(data);
  const pie = d3.pie()
  console.log(pie(chartData))

  
  useEffect(() => {
    // d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);
    // createPie()
  });

  return (
    <svg height="210" width="400">
      <path d="M150 0 L75 200 L225 200 Z" />
    </svg>
  )
}

export default PieChart;