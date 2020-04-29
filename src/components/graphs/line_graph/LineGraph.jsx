import React from 'react';
import Axes from '../histogram/Axes';

function LineGraph() {
    const margins = { top: 50, right: 20, bottom: 100, left: 60 }
    const svgDimensions = { width: 800, height: 500 }

    return (
        <svg width={svgDimensions.width} height={svgDimensions.height}>

        </svg>
    );
}

export default LineGraph;