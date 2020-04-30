import React from 'react';
import Axes from '../histogram/Axes';
import { scaleBand, scaleLinear } from 'd3-scale';

import creditCardDebtBalance from '../../../mock-data/mock-debtBalance';
const data = creditCardDebtBalance;

function LineGraph() {
    const margins = { top: 50, right: 20, bottom: 100, left: 60 }
    const svgDimensions = { width: 800, height: 500 }
    const maxValue = Math.max(...data.map(d=>d.balance));

    const xScale = scaleBand().padding(0.5).domain(...data.map(d => d.date)).range([margins.left, svgDimensions.width - margins.right]);
    const yScale = scaleLinear().domain([0, maxValue]).range([svgDimensions.height - margins.bottom, margins.top]);

    return (
        <svg width={svgDimensions.width} height={svgDimensions.height}>
            <Axes
              scales={{xScale, yScale}}
              margins={margins}
              svgDimensions={svgDimensions} />
        </svg>
    );
}

export default LineGraph;