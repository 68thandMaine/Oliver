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

function LineGraph() { 
    const margins = { top: 50, right: 220, bottom: 100, left: 60 }
    const svgDimensions = { width: 900, height: 500 }
    const maxValue = () => Math.max(...data.map(d => d.balance));
    // Temporary should delete once this is hooked up to state.
    const xScale = scaleBand()
      .domain(data.map(d => shortDate(d.date)))
      .range([margins.left, svgDimensions.width - margins.right]);
      
    const yScale = scaleLinear()
      .domain([0, maxValue()])
      .range([svgDimensions.height - margins.bottom, margins.top]);
    
    
	const legendValues = () => {
		let arr = [];
		dataGroup.forEach((d, i) => {
			arr.push(d.key)
		});
		return arr;
	}
    
    return (
        <svg class='justify-center' width={svgDimensions.width} height={svgDimensions.height}>
          <g transform='translate(50.20)'>
						<GraphTitle
							title='Debts or Something Like That' />
            <Axes
              scales= {{ xScale, yScale }}
              margins={margins}
              dimensions={dimensions} />
             <Line
              scales={{ xScale, yScale }}
              data={dataGroup}
              lineColor={legendValues} />
            <Legend 
							values={legendValues}
							dimensions={dimensions} /> 
          </g>
        </svg>
    );
}

LineGraph.propTypes = {
	dimensions: PropTypes.objectOf(PropTypes.number).isRequired,
	margins: PropTypes.objectOf(PropTypes.number).isRequired
}

export default LineGraph;