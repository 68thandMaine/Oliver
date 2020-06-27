import React from 'react';

import GraphCard from '../../components/card/GraphCard';
import Form from '../../components/forms';
import Sidebar from '../../components/navigation/sidebar/Sidebar';

const Accounts = () => {

	return (
		<section className="accounts__container">
			<Sidebar />			
			<GraphCard />
		</section>
			
		
	);
}

export default Accounts;