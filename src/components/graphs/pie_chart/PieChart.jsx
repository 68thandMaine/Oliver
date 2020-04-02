import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import "./pie_chart.scss";

function PieChart() {
  const width = 500;
  const height = width;
  const margin = 40;
  const radius = Math.min(width, height) / 2 - margin
  const data = {a: 9, b: 20, c:30, d:8, e:12}
  const color = d3.scaleOrdinal()
    .domain(data)
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])
  const pie = d3.pie()
      .value((d) => { return d.value; })
  const data_ready = pie(d3.entries(data))

  useEffect(() => {
  // append the svg object to the div called 'my_dataviz'
  const svg = d3.select("#donutChart")
    .append("svg")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(100)         // This is the size of the donut hole
        .outerRadius(radius)
      )
      .attr('fill', function(d){ return(color(d.data.key)) })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)
  });

  return (
      <div id='donutChart'></div>
  )
}

export default PieChart;