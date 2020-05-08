import React from 'react';
import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import {scaleOrdinal} from 'd3';
import { schemeSet2 } from 'd3-scale-chromatic';
import {shortDate} from '../../../lib/formatters/DateFormatters';

class Line extends React.Component {
    constructor(props){
        super(props);
        this.ref = React.createRef();
        this.renderLine = this.renderLine.bind(this);
    }
    
    
    componentDidMount() {
        const { data } = this.props;
        const node = this.ref.current;

        const color = scaleOrdinal()
        .domain(data)
        .range(schemeSet2);
        
        select(node)
            .append('path')
            .datum(data.debtBalance)
            .attr('id', 'line')
            .attr('stroke', (d) => color(d))
            .attr('stroke-width', 2)
            .attr('fill', 'none')
            .attr('d', this.renderLine);
    }
    
    renderLine = line()
    .x(d => this.props.scales.xScale(shortDate(d.date)))
    .y(d => this.props.scales.yScale(d.balance));
    
    render() {
        return <g className='line-group' ref={this.ref} />;
    }
}

export default Line;