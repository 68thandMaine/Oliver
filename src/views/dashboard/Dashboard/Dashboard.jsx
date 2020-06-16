import React, { useState } from 'react';
import { connect } from 'react-redux';
import Card from '../../../components/card/Card';
import GraphControls from '../../../components/graphs/graph_controls/DashboardGraphControls';
import Graphs from '../../../components/graphs/index';
import Table from '../../../components/table/Table';
import dashboardGraphOptions from '../../../config/dashboardGraphs.json';

const defaultDashboardO  = {
	 currentGraph: dashboardGraphOptions[2].identifier,
	 graphType: dashboardGraphOptions[2].graphType
}

function Dashboard(props) {
	const [ graphInfo, setGraphInfo ] = useState(defaultDashboardO); 
	function selectGraph(value) {
		setGraphInfo({
			currentGraph: value.identifier,
			graphType: value.graphType
		});
	}

  return (
    <section>
			<Table />
				<Card>
					{/* <Graphs 
						graphType={graphInfo.graphType}/> */}
				</Card>
				<GraphControls 
					dashboardGraphOptions={dashboardGraphOptions}
					activeControl={graphInfo.currentGraph}
					selectGraphToView={selectGraph}/>
    </section>
  );
}

const mapStateToProps = state => ({
  bankAccounts: state.bankAccounts,
  creditCards: state.creditCards,
  transactions: state.transactions
});

export default connect(mapStateToProps)(Dashboard);