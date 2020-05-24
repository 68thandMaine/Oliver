import React from 'react';
import PropTypes from 'prop-types';
import Axes from '../axes/Axes';
import Bars from './Bars';
import { scaleBand, scaleLinear } from 'd3-scale';
import { shortDate } from '../../../lib/formatters/DateFormatters';

// This import should be removed once Redux is connected
import Transactions from '../../../mock-data/mock-transaction';
const data = Transactions;

function Histogram(props) {
    const { margins, dimensions } = props;
    
    const maxValue = Math.max(...data.map(d=>d.amount));

    const xScale = scaleBand()
        .padding(0.5)
        .domain(data.map(d => shortDate(d.date)))
        .range([margins.left, dimensions.width - margins.right]);

    const yScale = scaleLinear()
        .domain([0, maxValue])
        .range([dimensions.height - margins.bottom,  margins.top]);
    
    return (
        <svg viewBox={`0, 0, ${dimensions.width}, ${dimensions.height}`}>
            <Axes
                scales= {{ xScale, yScale }}
                margins={margins}
                dimensions={dimensions} />
            <Bars
                scales={{ xScale, yScale }}
                margins={margins}
                data={data}
                maxValue={maxValue}
                dimensions={dimensions}
                />
        </svg>
    );
}

Histogram.propTypes = {
    
}

export default Histogram;