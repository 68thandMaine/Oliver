import React from 'react';
import PropTypes from 'prop-types';

import Graphs from '../graphs/index';

const GraphCard = (props) => {
	return (
		<section className="card card__graph">
			<div className="card__graph--title">
				<h3>{props.graphTitle}</h3>
			</div>
			<div className="card__graph--graph">
				<Graphs
					graphType={props.graphType} />
			</div>
			<div className="card__graph--body">
				<p>Let's put a table here. This table would be for showing the data the graph is displaying in a manual form.</p>
				<p>Chase....</p>
				<p>Apple...</p>
				<p>Will need some sort of data in this component</p>
			</div>
		</section>
	)
}

GraphCard.propTypes = {
	graphTitle: PropTypes.string.isRequired,
	graphType: PropTypes.string.isRequired,
	graphData: PropTypes.array.isRequired,
}

export default GraphCard;