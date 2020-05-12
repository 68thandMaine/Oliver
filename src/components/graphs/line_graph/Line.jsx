import React from 'react';
import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import { scaleOrdinal } from 'd3';
import { schemeSet2 } from 'd3-scale-chromatic';
import { shortDate } from '../../../lib/formatters/DateFormatters';

class Line extends React.Component {
    constructor(props){
        super(props);
        this.renderLine = this.renderLine.bind(this);
    }
    
    
    componentDidMount() {
        
    
        const color = scaleOrdinal()
            .domain(this.props.data)
            .range(schemeSet2);

         this.props.data.forEach((d, i) => {
                select('#lines')
                    .append('svg:path')
                    .attr('d', this.renderLine(d.values))
                    .attr('stroke', color(d.creditCardName))
                    .attr('stroke-width', 2)
                    .attr('fill', 'none')
        });
    
    }
    
    renderLine = line()
        .x(d => this.props.scales.xScale(shortDate(d.date)))
        .y(d => this.props.scales.yScale(d.balance));
    
    render() {
        return <g className='line-group' id='lines'/>;
    }
}

export default Line;