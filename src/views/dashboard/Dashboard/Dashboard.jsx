import React from 'react';
import { connect } from 'react-redux';

import Card from '../../../components/card/Card';

import GraphControls from '../../../components/graphs/graph_controls/DashboardGraphControls';
import Graphs from '../../../components/graphs/index';


import dashboardGraphOptions from '../../../config/dashboardGraphs.json';

function Dashboard(props) {


  return (
    <section>
        <GraphControls dashboardGraphOptions={dashboardGraphOptions}/>
				<div className='flex flex-row justify-center mt-4'>
					<Card cardTitle='graphs'>
						<Graphs />
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