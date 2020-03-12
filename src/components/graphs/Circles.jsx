import React, { useEffect } from 'react';
import * as d3 from 'd3';

function Circles() {
  
  useEffect(()=> {
    drawCircles()
  });

function drawCircles() {
  const circle = d3.selectAll("circle").style("fill", "steelblue").attr("r", 30);
    circle.attr("cx", () => { return Math.random() * 300; });
    circle.attr("cy",() => { return Math.random() * 100; });

    circle.data([32, 57, 112]);
    circle.attr("r", (d) => { return Math.sqrt(d) });

    circle.attr("cx", (d, i) => { return i * 100 + 30; });
}
  return (
    <svg width="720" height="120">
      
    </svg>
  )
}

export default Circles;