import React from 'react';
import PropTypes from 'prop-types';

import Table from '../table/Table';

const AccountSummaryCard = () => {

	return (
		<section className='card order-1 xs:order-none'>
			<h3>Card Title</h3>
			<hr />
			<table className='table-auto'>
				<thead>
					<tr>
						<th>Credit Card Name</th>
						<th>Balance</th>
						<th>Month</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Discover Card</td>
						<td>$5,321.32</td>
						<td>June 2020</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}

AccountSummaryCard.propTypes = {

};

export default AccountSummaryCard;