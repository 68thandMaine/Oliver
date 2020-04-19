improt React from 'react';
import PropTypes from 'prop-types';

import { scaleBand, scaleLinear } from 'd3-scale';

export default class Histogram extends React.Component() {
    constructor(props){
        super(props);
        this.xScale = scaleBand();
        this.yScale = scaleLinear();
    }

    render() {
        // const margins = { this.props}
        // const svgDimensions = { width: 800, height: 500 }
        
        // Will switch data to props after scaffolding component in the consts
        // below.
        const maxValue = Math.max(...data.map(d=>d.value));

        // scaleBand type
        const xScale = this.xScale
        .domain(data.map(d => d.title))
        .range([margins.left, svgDimenstions.width - margins.right]);

        // scaleLinear type
        const yScale = this.yScale
        // needs at least a min and max value for the domain
        .domain([0, maxValue])
        .range([svgDimensions.height - margins.bottom - margins.top]);

        return (
            <svg width={svgDimensions.width} height={svgDimensions.height}>
            
            </svg>
        );
    }
}

Histogram.propTypyes = {
    
}