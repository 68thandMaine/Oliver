import React from 'react';
import PropTypes from 'prop-types';
import Axes from './Axes';
import Bars from './Bars';
import ResponsiveWrapper from './ChartComponent';
import { scaleBand, scaleLinear } from 'd3-scale';

// This import should be reomved once Redux is connected
import Transactions from '../../../mock-data/mock-transaction';
const data = Transactions;


class Histogram extends React.Component {
    constructor(props){
        super(props);
        this.xScale = scaleBand();
        this.yScale = scaleLinear();
    }

    componentDidUpdate() {
        console.log(this.props);
    }

    render() {
        const margins = { left: 39, right: 39, bottom: 2, top: 2}
        const svgDimensions = { width: 800, height: 500 }
        
        const maxValue = Math.max(...data.map(d=>d.Amount));

        const xScale = this.xScale
            .domain(data.map(d => d.Date))
            .range([margins.left, svgDimensions.width - margins.right]);

        const yScale = this.yScale
        // needs at least a min and max value for the domain
            .domain([0, maxValue])
            .range([svgDimensions.height - margins.bottom,  margins.top]);
        
        return (
            <svg width={svgDimensions.width} height={svgDimensions.height}>
                <Axes
                    scales= {{ xScale, yScale }}
                    margins={margins}
                    svgDimensions={svgDimensions} />
                <Bars
                    scales={{ xScale, yScale }}
                    margins={margins}
                    data={data}
                    maxValue={maxValue}
                    svgDimensions={svgDimensions}
                    />
            </svg>
        );
    }
}

Histogram.propTypyes = {
    
}

export default ResponsiveWrapper(Histogram);