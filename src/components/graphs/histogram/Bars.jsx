import React from 'react';
import PropTypes from 'prop-types';

import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';

import { shortDate } from '../../../lib/formatters/DateFormatters';

export default class Bars extends React.Component {
    constructor(props) {
        super(props)
    
        this.colorScale = scaleLinear()
        .domain([0, this.props.maxValue])
        .range(['#ff0000', '#eee'])
        .interpolate(interpolateLab);
    }
    
    render() {
        const { scales, margins, data, svgDimensions } = this.props;
        const { xScale, yScale } = scales;
        const { height } = svgDimensions;
        const bars = (
            data.map(datum =>
                <rect
                    key={datum.id}
                    x={xScale(shortDate(datum.date))}
                    y={yScale(datum.amount)}
                    height={height - margins.bottom - yScale(datum.amount)}
                    width={xScale.bandwidth()}
                    fill={this.colorScale(datum.amount)}
                    />,
            )
        )

        return (
            <g>{bars}</g>
        );
    }
}

Bars.propTypes = {
    
}