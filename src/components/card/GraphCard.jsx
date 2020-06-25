import React from 'react';
import PropTypes from 'prop-types';

import Graphs from '../graphs/index';

const GraphCard = () => {
	return (
		<section className="card card__graph">
			<div className="card__graph--title">
				<h4>Paycheck Breakdown</h4>
			</div>
			<div className="card__graph--graph">
				<Graphs
					graphType="donut" />
			</div>
			<div className="card__graph--body">
				<p>Let's put a table here</p>
			</div>
		</section>
	)
}

export default GraphCard;