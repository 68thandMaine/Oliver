import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

function PieChart(props) {
	const { width } = props.dimensions;
	const { margins } = props.margins;
  const height = width;
	const margin = 40;

	// Refactor the radius. It needs to correlate to the size of the histogram and linegraph.
	const radius = Math.min(width, height) / 2 - margin;
	// This needs to change to percentages of the monthly bills.
  const data = {a: 9, b: 20, c:30, d:8, e:12}
  const color = d3.scaleOrdinal()
    .domain(data)
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])
  const pie = d3.pie()
      .value((d) => { return d.value; })

  const arc = d3.arc()
      .innerRadius(100)
      .outerRadius(radius);
  var outerArc = d3.arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9)
  const data_ready = pie(d3.entries(data))

  useEffect(() => {
  // append the svg object to the div called 'my_dataviz'
  const svg = d3.select("#donutChart")
    .append("svg")
      .attr("viewBox", `0, 0, ${width}, ${height}`)
    .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('allSlices')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function(d){ return(color(d.data.key)) })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)

      svg
      .selectAll('allPolylines')
      .data(data_ready)
      .enter()
      .append('polyline')
        .attr("stroke", "black")
        .style("fill", "none")
        .attr("stroke-width", 1)
        .attr('points', function(d) {
          var posA = arc.centroid(d) // line insertion in the slice
          var posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
          var posC = outerArc.centroid(d); // Label position = almost the same as posB
          var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
          posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
          return [posA, posB, posC]
        })
    
    // Add the polylines between chart and labels:
    svg
      .selectAll('allLabels')
      .data(data_ready)
      .enter()
      .append('text')
        .text( function(d) { console.log(d.data.key) ; return d.data.key } )
        .attr('transform', function(d) {
            var pos = outerArc.centroid(d);
            var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
            pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
            return 'translate(' + pos + ')';
        })
        .style('text-anchor', function(d) {
            var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
            return (midangle < Math.PI ? 'start' : 'end')
        })
    
  });
  return (
      <div>
        <h1>{props.title}</h1>
        <div id='donutChart'></div>
      </div>
  )
}

PieChart.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PieChart;