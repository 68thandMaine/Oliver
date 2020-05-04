import React from 'react';
import Axes from '../histogram/Axes';
import Line from './Line';
import Legend from './Legend';
import * as d3 from 'd3';
import {shortDate} from '../../../lib/formatters/DateFormatters';

import { scaleLinear, scaleBand } from 'd3-scale';

import creditCardMonthlyBalance from '../../../mock-data/mock-debtBalance';
const data = creditCardMonthlyBalance;

function LineGraph() {
    const margins = { top: 50, right: 20, bottom: 100, left: 60 }
    const svgDimensions = { width: 800, height: 500 }
    const maxValue = Math.max(...data.map(d=>d.balance));
    
    const xScale = scaleBand()
      .domain(data.map(d => shortDate(d.date)))
      .range([margins.left, svgDimensions.width - margins.right]);
    const yScale = scaleLinear()
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top]);

    return (
        <svg width={svgDimensions.width} height={svgDimensions.height}>
          <g transform='translate(50.20)'>
            <Axes
              scales= {{ xScale, yScale }}
              margins={margins}
              svgDimensions={svgDimensions} />
            <Line
              scales={{ xScale, yScale }}
              svgDimensions={svgDimensions}
              data={data}
              maxValue={maxValue} />
            <Legend />
          </g>
        </svg>
    );
}

export default LineGraph;