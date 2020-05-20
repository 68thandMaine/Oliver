import React from 'react';
import { connect } from 'react-redux';


import GraphControls from '../../../components/graphs/graph_controls/DashboardGraphControls';


import dashboardGraphOptions from '../../../config/dashboardGraphs.json';

function Dashboard(props) {


  return (
    <section>
        <GraphControls dashboardGraphOptions={dashboardGraphOptions}/>
        
    </section>
  );
}

const mapStateToProps = state => ({
  bankAccounts: state.bankAccounts,
  creditCards: state.creditCards,
  transactions: state.transactions
});

export default connect(mapStateToProps)(Dashboard);