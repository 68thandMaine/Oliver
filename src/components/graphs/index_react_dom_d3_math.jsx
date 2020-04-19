import React from 'react';
import PropTypes from 'prop-types';

import d3, { line } from 'd3';

class Graphs extends React.Component {
    constructor(props) {
        super(props);
        this.drawBar = this.drawBar.bind(this);
    }

    drawBar() {
        let xScale;
        let yScale;
        let bar;

        return (
            <path
                className="bar"
                d={bar(this.props.data)} />
        );
    }

    render() {
        <svg
            className="graph-container"
            width={this.props.width}
            height={this.props.height}
            >
                {this.drawBar()}
            </svg>
    }
}