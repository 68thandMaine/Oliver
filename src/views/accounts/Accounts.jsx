import React from 'react';

import GraphCard from '../../components/card/GraphCard';
import Form from '../../components/forms';
import Sidebar from '../../components/navigation/sidebar/Sidebar';

const Accounts = () => {

	return (
		<section className="accounts__container">
			<Sidebar />
			<div>
				<GraphCard
					graphTitle="Balance per month"
					graphType="line" />
				<GraphCard
					graphTitle="Paycheck Distributions"
					graphType="pie" />
				<GraphCard
					graphTitle="Debt Amount per month"
					graphType="histogram" />
			</div>
		</section>
	);
}

export default Accounts;