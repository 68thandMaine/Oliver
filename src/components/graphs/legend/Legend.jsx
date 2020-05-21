import React from 'react';
import { select, selectAll } from 'd3-selection';
import { schemeSet2 } from 'd3-scale-chromatic';
import PropTypes from 'prop-types';
import { scaleOrdinal } from 'd3';

class Legend extends React.Component {

  componentDidMount() {
		let nodeWidth = (d) => d.getBBox().width; 
   	let color =  scaleOrdinal()
    	.domain(this.props.values)
    	.range(schemeSet2);
		const { height } = this.props.dimensions;
	 	const legend = select('#legend')
		 .attr('class', 'legend')
		 .attr('transform', 'translate(500,-415)');
		
		const lg = legend.selectAll('g')
			.data(this.props.values)
			.enter()
			.append('g')
				.attr('transform', (d, i) => `translate(${i * 100},${height - 15})`);

			lg.append('rect')
				.style('fill', d => color(d))
				.attr('x', 0)
				.attr('y', 0)
				.attr('width', 10)
				.attr('height', 10);

			lg.append('text')
				
				.style('font-size', '13px')
				.style('fill', d => color(d))
				.attr('x', 17.5)
				.attr('y', 10)
				.text(d => d);
	}

  render() {
    return (
      <g id="legend">
        
      </g>
    )
  }
}

Legend.propTypes = {

}

export default Legend;