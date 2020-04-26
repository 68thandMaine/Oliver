import React from 'react';
import PropTypes from 'prop-types';

import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';

export default class Bars extends React.Component() {
    constructor(props) {
        super(props)

        this.colorScale = scaleLinear()
        .domain([0, this.props.maxValue])
        .range(['#f3e5f5', '#7b1fa2'])
        .interpolate(interpolateLab);
    }

    render() {
        const { scale, margins, data, svgDimensions } = this.props;
        const { xScale, yScale } = scale;
        const { height } = svgDimensions;
        const bars = (
            data.map(datum =>
                <rect
                    key={datum.title}
                    x={xScale(datum.tile)}
                    y={yScale(datum.value)}
                    height={height - margins.bottom - scale.yScale(datum.value)}
                    widht={xScale.bandwidth()}
                    fill={this.colorScale(datum.value)}
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