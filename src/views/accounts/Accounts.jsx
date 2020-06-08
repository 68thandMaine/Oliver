import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../components/card/Card';
import NewBankAccount from '../../components/forms/bankAccount/NewBankAccount';
const Accounts = () => {

	return (
		<section>
			<Card>
				<NewBankAccount />
			</Card>
		</section>
	);
}

export default Accounts;