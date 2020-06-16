import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../components/card/Card';
import BankAccountForm from '../../components/forms/bankAccount/BankAccountForm';
const Accounts = () => {

	return (
		<section className="flex">
			<aside className="w-1/5 px-2">
				<h1>Hello</h1>
				<p>This is where the account sidebar menu will eventually go.</p>
				<p>What should be in here?</p>
				<ul>
					<li>Information on Credit Cards, Bank Accounts, and Loans</li>
					<li>Ability to add new accounts.</li>
				</ul>
			</aside>
			<section className="w-4/5 px-2">
			<Card>
				<BankAccountForm />
			</Card>
			</section>
		</section>
			
		
	);
}

export default Accounts;