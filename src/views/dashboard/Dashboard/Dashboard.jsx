import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Card from '../../../components/card/Card';
import GraphControls from '../../../components/graphs/graph_controls/DashboardGraphControls';
import Graphs from '../../../components/graphs/index';

import dashboardGraphOptions from '../../../config/dashboardGraphs.json';
const defaultDashboardO  = {
	 currentGraph: dashboardGraphOptions[0].identifier,
	 graphType: dashboardGraphOptions[0].graphType
}

function Dashboard(props) {

	const [ graphInfo, setGraphInfo ] = useState(defaultDashboardO) 
	console.log(graphInfo)
  return (
    <section>
				<GraphControls 
					dashboardGraphOptions={dashboardGraphOptions}
					activeControl={graphInfo.currentGraph}/>
				<div className='flex flex-row justify-center mt-4'>
					<Card>
						<Graphs 
							graphType={graphInfo.graphType}/>
					</Card>
				</div>
    </section>
  );
}

const mapStateToProps = state => ({
  bankAccounts: state.bankAccounts,
  creditCards: state.creditCards,
  transactions: state.transactions
});

export default connect(mapStateToProps)(Dashboard);