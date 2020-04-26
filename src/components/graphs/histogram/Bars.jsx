import React from 'react';
import PropTypes from 'prop-types';

import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';

export default class Bars extends React.Component {
    constructor(props) {
        super(props)
        this.colorScale = scaleLinear()
        .domain([0, this.props.maxValue])
        .range(['#f3e5f5', '#7b1fa2'])
        .interpolate(interpolateLab);
    }
    
    render() {
        const { scales, margins, data, svgDimensions } = this.props;
        const { xScale, yScale } = scales;
        const { height } = svgDimensions;
        const bars = (
            data.map(datum =>
                <rect
                    key={datum.Id}
                    x={xScale(datum.Date)}
                    y={yScale(datum.Amount)}
                    height={height - margins.bottom - yScale(datum.Amount)}
                    widht={xScale.bandwidth()}
                    fill={this.colorScale(datum.Amount)}
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