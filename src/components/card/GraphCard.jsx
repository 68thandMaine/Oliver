import React from 'react';
import PropTypes from 'prop-types';

import Graphs from '../graphs/index';

const GraphCard = () => {
	return (
		<section className="card card__graph">
			<div className="card__graph--title">
				<h5>Balance History of Apple FCU</h5>
			</div>
			<div className="card__graph--graph">
				<Graphs
					graphType="line" />
			</div>
			<div className="card__graph--body">
				<p>Let's put a table here. This table would be for showing the data the graph is displaying in a manual form.</p>
			</div>
		</section>
	)
}

export default GraphCard;