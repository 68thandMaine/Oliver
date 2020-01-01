// Important Stuff
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// API Stuff
import { getBankAccounts } from './actions/BankAccountActions';
// Router Stuff
import Routes from './routes/Routes';
// Styling Stuff
import './App.css';
import StyleSheet from './assets/style-sheet/stylesheet';
// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCogs, faChartPie, faFileInvoiceDollar, faLandmark, faListAlt, faSearch, faWarehouse, faPlusCircle, faDollarSign} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCogs, faChartPie, faFileInvoiceDollar, faLandmark, faListAlt, faSearch, faWarehouse, faPlusCircle, faDollarSign);


function App(props) {

  useEffect(() => {
    props.dispatch(getBankAccounts());
  },[props]);

  return (
    <div className="App">

       <StyleSheet />
    </div>
  );
}

export default connect()(App);
