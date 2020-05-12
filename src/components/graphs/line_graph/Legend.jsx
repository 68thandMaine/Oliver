import React from 'react';
import { select, selectAll } from 'd3-selection';
import { schemeSet2 } from 'd3-scale-chromatic';
import PropTypes from 'prop-types';
import { scaleOrdinal } from 'd3';

class Legend extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      legendItems: this.props.values
    }
  }

  componentDidMount() {
   let color =  scaleOrdinal()
    .domain(this.state.legendItems)
    .range(schemeSet2);

   const legend = select('#legend');
   // legend item icon 
    legend.selectAll('dots')
      .data(this.state.legendItems)
      .enter()
      .append('circle')
        .attr('cx', 100)
        .attr('cy', ((d, i) => 100 + i*25))
        .attr('r', 7)
        .style('fill',(d) => color(d))

    // title
    legend.append('text')
      .attr('font-size', '12px')
      .attr('font-family', 'HelveticaNeue-Bold, Helvetica, sans-serif')
      .attr('fill','white')
      .attr('y', 20)
      .text('helloooo')

   // labels
    legend.selectAll('labels')
      .data(this.state.legendItems)
      .enter()
      .append('text')
        .attr('x', 120)
        .attr('y', (d,i) => 100 + i * 25 )
        .style('fill', (d) => color(d))
        .text((d => d))
        .style('alignment-baseline', 'middle');
  }
    
  // Creates the state array for items in the legend

  render() {
    return (
      <g id="legend">
        
      </g>
    )
  }
}

Legend.propTypes = {
  // maxValue: PropTypes.number,

}

export default Legend;