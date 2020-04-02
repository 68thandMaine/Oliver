import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

function BarChart(props) {
  // break down props here into variables to increase readability
  const [ data, setData ] = useState();
  
  useEffect(() => {
    drawBarChart(data);
  });

  function drawBarChart(data) {
    const canvasHeight = 400;
    const canvasWidth = 600;
    const scale = 20;

    const svgCanvas = d3.select("#canvas")
      .append("svg")
      .attr("width", canvasWidth)
      .attr("height", canvasHeight)
      .style("border", "1px solid white")

      svgCanvas.selectAll("rect")
      .data(data).enter()
           .append("rect")
           .attr("width", 40)
           .attr("height", (datapoint) => datapoint * 20)
           .attr("fill", "cyan")
           .attr("x", (datapoint, iteration) => iteration * 45)
           .attr("y", (datapoint) => canvasHeight - datapoint * scale)

      svgCanvas.selectAll("text")
      .data(data).enter()
      .append("text")
      .attr("x", (dataPoint, i) => i * 45 + 10)
      .attr("y", (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
      .text(dataPoint => dataPoint)
      .style("color", "white")
  }

  return (
    <div id="canvas" className="container">
  
    </div>
  );
}

export default BarChart