import React from 'react';
import * as d3 from 'd3';

export default class Axis extends React.Component {
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
    const node  = this.refs;
    const axis = d3.axisBottom().scale(this.props.scale);    
    console.log(typeof axis)
    d3.select(node).call(axis);
  }

  render() {
    return <g className="axis" ref="axis" transform={this.props.translate}></g>
  }
}