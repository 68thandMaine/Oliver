import React from 'react';

const SideBar = (props) => {
	return (
		<aside className="border border-blue-500 flex flex-wrap items-center">
			<section>
				<h3>Banks</h3>
				<h6>Apple Federal Credit Union</h6>
				<h6>Chase</h6>
			</section>
			
			<section>
				<h3>Credit Cards</h3>
				<h6>Discover Card</h6>
				<h6>Apple Federal Credit Union</h6>
				<h6>Citi</h6>
			</section>
			
			<section>
				<h3>Loans</h3>
				<h6>Climb</h6>
				<h6>UAS</h6>
				<h6>Navient</h6>
			</section>

		</aside>
	)
}

export default SideBar;