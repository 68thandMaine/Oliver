import React from 'react';
import { select, selectAll } from 'd3-selection';
import PropTypes from 'prop-types';

class Legend extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      legendItems: this.createLegendItems()
    }
    this.createLegendItems = this.createLegendItems.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //   legendItems: this.createLegendItems()
    // });

   let colorLegend = ["rgb(247,251,255)", "rgb(222,235,247)", "rgb(198,219,239)", "rgb(158,202,225)", "rgb(107,174,214)", "rgb(66,146,198)", "rgb(33,113,181)", "rgb(8,81,156)"];

   let legend = select('#legend');

   // color 
    legend.selectAll('rect')
    .data(colorLegend)
    .enter()
    .append('rect')
    .attr('fill', function(d, i) { return colorLegend[i]; })
    .attr('x', function(d, i) { return (i*30); })
    .attr('y', 30)
    .attr('width', 30)
    .attr('height', 20);

    // title
    legend.append('text')
    // .attr('transform', 'translate(500, 525')
    .attr('font-size', '12px')
    .attr('font-family', 'HelveticaNeue-Bold, Helvetica, sans-serif')
    .attr('fill','white')
    .attr('y', 20)
    .text('helloooo')

    legend.append('g')
      // .attr('transform', 'translate(500, 525)')
      .selectAll('text')
      .data(this.state.legendItems)
      .enter()
      .append('text')
      .attr('font-size', '10px')
      .attr('font-family', 'HelveticaNeue-Bold, Helvetica, sans-serif')
      .attr('fill', 'red')
      .attr('x', function(d,i){return (i*30)})
      .attr('y', 60)
      .text(function (d) {return d})

    console.log(select('#legend'))
  }
    
  // Creates the state array for items in the legend
  createLegendItems() {
    const { values } = this.props;
    return values.filter((index, cardName) => {
      return values.indexOf(index) == cardName
    });
  }




  render() {
    return (
      <g id="legend">
        
      </g>
    )
  }
}

Legend.propTypes = {
  maxValue: PropTypes.number,

}

export default Legend;