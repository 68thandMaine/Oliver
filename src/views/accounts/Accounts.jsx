import React from 'react';

import Card from '../../components/card/Card';
import Form from '../../components/forms';
import Sidebar from '../../components/navigation/sidebar/Sidebar';

const Accounts = () => {

	return (
		<section className="flex border border-red-500">
			<Sidebar />
			<section className="w-4/5 px-2">
				<Form
					formName="newCreditCard" />
			</section>
		</section>
			
		
	);
}

export default Accounts;