import React, {useEffect} from 'react';
import { line } from 'd3-shape';
import { shortDate } from '../../../lib/formatters/DateFormatters';

function Lines(props) {

    useEffect(() => {

    })
    const { xScale, yScale } = props.scales;
    function renderLines() {
        debugger
        return line().x(function(d) { return xScale(d.date) }).y(function(d) { return yScale(d.balance) })
    }
    
    let newLine = renderLines(props.data)
    
    console.log(newLine)
    return (
        <path className='line' stroke='red' d={newLine}></path>
    )
}

export default Lines;