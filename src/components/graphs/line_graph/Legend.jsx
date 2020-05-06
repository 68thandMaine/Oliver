import React from 'react';
import PropTypes from 'prop-types';

class Legend extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
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