// Important Stuff
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import StyleGuide from './assets/style-guide/StyleGuide.jsx';

// API Stuff
// import { getBankAccounts } from './actions/BankAccountActions';


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
		<StyleGuide />
  );
}

const mapStateToProps = state => ({
  navOptions: state.NavOptions
});

export default connect(mapStateToProps)(App);
