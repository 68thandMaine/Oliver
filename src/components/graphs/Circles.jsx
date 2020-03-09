import React, { useEffect } from 'react';
import * as d3 from 'd3';

function Circles() {
  
  useEffect(()=> {
    drawCircles();
  });

function drawCircles() {
  const circle = d3.selectAll("circle")
  // circle.data([32, 57, 112, 293]);
  // circle.attr("r", 30);
  circle.style("fill", "steelblue");
  // circle.attr("cx", (d, i) => { return Math.random() * 100 + 30; });
  // circle.attr("cy", () => { return Math.random() * 100; });
  // circle.attr("r", (d) => { return Math.sqrt(d); });
  // debugger;
  const svg = d3.select("svg");
  const circleSvg = svg.selectAll("circle")
    .data([32, 57, 112, 293]);
    circleSvg.style("fill", "steelblue");
  const circleEnter = circleSvg.enter().append("circleSvg");
  circleEnter.attr("cy", 60);
  console.log(circleEnter)
  circleEnter.attr("cx", (d, i) => { return i * 100 + 30});
  circleEnter.attr("cy", (d) => { return Math.sqrt(d); });

}
  return (  
  <svg className="flex content-start content-center" > 
    <circle cx="40" cy="60" r="10"></circle>
    <circle cx="80" cy="60" r="10"></circle>
    <circle cx="120" cy="60" r="10"></circle>
  </svg>
  )
}

export default Circles;