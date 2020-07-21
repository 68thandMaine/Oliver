import React from 'react';
import PropTypes from 'prop-types';
import Axes from '../axes/Axes';
import Line from './Line';
import Legend from '../legend/Legend';
import GraphTitle from '../title/GraphTitle';
import { shortDate } from '../../../lib/formatters/DateFormatters';
import { scaleLinear, scaleBand } from 'd3-scale';


import { nest } from 'd3-collection';
import creditCardMonthlyBalance from '../../../mock-data/mock-debtBalance';
const data = creditCardMonthlyBalance;

function LineGraph(props) { 
	const { margins, dimensions} = props;
	const maxValue = () => Math.max(...data.map(d => d.balance));
	// Temporary should delete once this is hooked up to state.
	const xScale = scaleBand()
		.domain(data.map(d => shortDate(d.date)))
		.range([margins.left, dimensions.width - margins.right]);
		
	const yScale = scaleLinear()
		.domain([0, maxValue()])
		.range([dimensions.height - margins.bottom, margins.top]);

	const dataGroup = nest().key((d) => d.creditCardName).entries(data); 
    
    
	const legendValues = () => {
		let arr = [];
		dataGroup.forEach((d, i) => {
			arr.push(d.key)
		});
		return arr;
	}
    
    return (
				<svg viewBox={`0, 0, ${dimensions.width}, ${dimensions.height}`} preserveAspectRatio='xMaxYmin'>
            <Axes
              scales= {{ xScale, yScale }}
              margins={margins}
              dimensions={dimensions} />
             <Line
              scales={{ xScale, yScale }}
              data={dataGroup}
              lineColor={legendValues} />
        </svg>
    );
}

LineGraph.propTypes = {
	dimensions: PropTypes.objectOf(PropTypes.number).isRequired,
	margins: PropTypes.objectOf(PropTypes.number).isRequired
}

export default LineGraph;