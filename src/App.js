// Important Stuff
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NavBar from './components/nav-bar/NavBar';

// API Stuff
// import { getBankAccounts } from './actions/BankAccountActions';
// Router Stuff
import Routes from './routes/Routes';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCogs, faChartPie, faFileInvoiceDollar, faLandmark, faListAlt, faSearch, faWarehouse, faPlusCircle, faDollarSign, faTimesCircle, faCheckCircle, faShoppingCart, faCreditCard, faAngleRight, faAngleLeft, faDiagnoses} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCogs, faChartPie, faFileInvoiceDollar, faLandmark, faListAlt, faSearch, faWarehouse, faPlusCircle, faDollarSign, faTimesCircle, faCheckCircle, faShoppingCart, faCreditCard, faAngleRight, faAngleLeft, faDiagnoses);



function App(props) {
  useEffect(() => {
    // props.dispatch(getBankAccounts());
  },[props]);

  const content = {
    marginTop: '2vh',
  };

  return (
    <div className="container--fluid">
      {/* <NavBar 
        linkList = {props.navOptions}/> */}
      <Routes />
    </div>
  );
}

const mapStateToProps = state => ({
  navOptions: state.NavOptions
});

export default connect(mapStateToProps)(App);
