import React from 'react';
import PropTypes from 'prop-types';
import * as d3Axis from 'd3-axis';
import { select as d3Select } from 'd3'

class Axis extends React.Component() {
    constructor(props) {
        super(props);

        this.renderAxis = this.renderAxis.bind(this);
    }

    componentDidMount() {
        this.renderAxis();
    }

    componentDidUpdate() {
        this.renderAxis();
    }

    renderAxis() {
        const axisType = `axis${this.props.orient}`;
        const axis = d3Axis[axisType]()
        .scale(this.props.scale)
        .tickSize(-this.props.tickSize)
        .tickPadding([12])
        .ticks([4]);

        d3Select(this.axisElement).call(axis);
    }
    render() {
        return (
            <g
            className={`axis axis-${this.props.orient}`}
            ref={(el) => { this.axisElement = el; }}
            transform={this.props.translate}
            />
        )
    }
}

export default Axis();

Axis.propTypes = {

}