import React from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';


class GraphTitle extends React.PureComponent {

	componentDidMount() {
		const graphTitle = select('#graphTitle');
		graphTitle.attr('transform','translate(60,32)')
		
		graphTitle.append('text')
			.attr('font-size', '24px')
			.attr('fill', '#eee')
			.text(`${this.props.title}`);
	}

	render() {
		return (
		<g id='graphTitle'>

		</g>
		);
	}
} 


GraphTitle.propTypes = {
	title: PropTypes.string.isRequired,
}

export default GraphTitle;