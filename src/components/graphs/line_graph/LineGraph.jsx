import React from 'react';
import Axes from '../axes/Axes';
import Line from './Line';
import Legend from '../legend/Legend';
import { shortDate } from '../../../lib/formatters/DateFormatters';

import { nest } from 'd3-collection';
import { scaleLinear, scaleBand } from 'd3-scale';

import creditCardMonthlyBalance from '../../../mock-data/mock-debtBalance';
import { svg } from 'd3';
const data = creditCardMonthlyBalance;

function LineGraph() { 
    const margins = { top: 50, right: 80, bottom: 100, left: 60 };
    const svgDimensions = { width: 750, height: 450 };
    const maxValue = () => Math.max(...data.map(d => d.balance));
    // Temporary should delete once this is hooked up to state.
    const xScale = scaleBand()
      .domain(data.map(d => shortDate(d.date)))
      .range([margins.left, svgDimensions.width - margins.right]);
      
    const yScale = scaleLinear()
      .domain([0, maxValue()])
      .range([svgDimensions.height - margins.bottom, margins.top]);
    
    const dataGroup = nest().key((d) => d.creditCardName).entries(data); 
    
    const legendValues = () => {
      let arr = [];
      dataGroup.forEach((d, i) => {
        arr.push(d.key)
      });
      return arr;
    }
    
    return (
				<svg viewBox={`0, 0, ${svgDimensions.width}, ${svgDimensions.height}`} preserveAspectRatio='none'>
          <g transform='translate(50.20)'>
            <Axes
              scales= {{ xScale, yScale }}
              margins={margins}
              svgDimensions={svgDimensions} />
             <Line
              scales={{ xScale, yScale }}
              data={dataGroup}
              lineColor={legendValues} />
            <Legend 
              values={legendValues} /> 
          </g>
        </svg>
    );
}

export default LineGraph;