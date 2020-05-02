import React from 'react';
import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import {shortDate} from '../../../lib/formatters/DateFormatters';

class Line extends React.Component {
    constructor(props){
        super(props);
        this.ref = React.createRef();
        this.renderLine = this.renderLine.bind(this);
    }

    componentDidMount() {
        const node = this.ref.current;
        const { scales, data } = this.props;
        const initialData = data.map(d => ({
            date: d.date,
            balance: d.balance
        }));
        
        select(node)
        .append('path')
        .datum(initialData)
        .attr('id', 'line')
        .attr('stroke', 'red')
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