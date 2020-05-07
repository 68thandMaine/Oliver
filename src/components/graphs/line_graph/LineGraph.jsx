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
    const maxValue = () => {
      let numbers = [];
      for(let cc = 0; cc < data.length; cc += 1) {
        for(let db = 0; db < data[cc].debtBalance.length; db += 1){
          numbers.push(data[cc].debtBalance[db].balance);
        }
      }
      return Math.max(...numbers)
    }
    // // Temporary should delete once this is hooked up to state.
    const xScale = scaleBand()
    .domain(data[0].debtBalance.map(d => shortDate(d.date)))
      .range([margins.left, svgDimensions.width - margins.right]);
    const yScale = scaleLinear()
      .domain([0, maxValue()])
      .range([svgDimensions.height - margins.bottom, margins.top]);
    const legendValues = () => data.map(d => d.creditCardName)
    const drawLine = () => {
      return data.map((d, i) => (
        <Line
              key={i}
              scales={{ xScale, yScale }}
              svgDimensions={svgDimensions}
              data={d.debtBalance}
              maxValue={maxValue} />
      ))
    }

    return (
        <svg width={svgDimensions.width} height={svgDimensions.height}>
          <g transform='translate(50.20)'>
            <Axes
              scales= {{ xScale, yScale }}
              margins={margins}
              svgDimensions={svgDimensions} />
            {drawLine()}
            <Legend 
              maxValue={maxValue}
              values={legendValues}
              />
          </g>
        </svg>
    );
}

export default LineGraph;