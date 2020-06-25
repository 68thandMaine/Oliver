import React from 'react';

import GraphCard from '../../components/card/GraphCard';
import Form from '../../components/forms';
import Sidebar from '../../components/navigation/sidebar/Sidebar';

const Accounts = () => {

	return (
		<section className="flex border border-red-500">
			<Sidebar />
			<section className="w-4/5 px-2">
				<GraphCard />
			</section>
		</section>
			
		
	);
}

export default Accounts;