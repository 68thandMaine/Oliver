// Important Stuff
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Menu from './components/navigation/menu/Menu';
// import StyleGuide from './assets/style-guide/StyleGuide';

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


  return (
    <div className="container--fluid">
      <Menu 
        linkList = {props.navOptions}/>
		  <Routes />
			{/* <StyleGuide /> */}
    </div>
  );
}

const mapStateToProps = state => ({
  navOptions: state.NavOptions
});

export default connect(mapStateToProps)(App);
