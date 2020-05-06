import React from 'react';
import PropTypes from 'prop-types';

class Legend extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      legendItems:[],
    }
    this.createLegendItems = this.createLegendItems.bind(this);
  }

  componentDidMount() {
    this.setState({
      legendItems: this.createLegendItems()
    })
  }

  createLegendItems(){

  }
  render() {
    return (
      <g>
        
      </g>
    )
  }
}

Legend.propTypes = {
  maxValue: PropTypes.number,
}

export default Legend;