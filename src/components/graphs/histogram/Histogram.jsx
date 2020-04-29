import React from 'react';
import PropTypes from 'prop-types';
import Axes from './Axes';
import Bars from './Bars';
import ResponsiveWrapper from './ChartComponent';
import { scaleBand, scaleLinear } from 'd3-scale';
import { shortDate } from '../../../lib/formatters/DateFormatters';

// This import should be reomved once Redux is connected
import Transactions from '../../../mock-data/mock-transaction';
const data = Transactions;


class Histogram extends React.Component {
    constructor(props){
        super(props);
        this.xScale = scaleBand();
        this.yScale = scaleLinear();
    }

    componentDidMount() {
    
    }

    render() {
        const margins = { top: 50, right: 20, bottom: 100, left: 60 }
        const svgDimensions = { width: 800, height: 500 }
        
        const maxValue = Math.max(...data.map(d=>d.amount));

        const xScale = this.xScale
            .padding(0.5)
            .domain(data.map(d => shortDate(d.date)))
            .range([margins.left, svgDimensions.width - margins.right]);

        const yScale = this.yScale
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