	import React from 'react';
	import { Link } from "react-router-dom";

	import PropTypes from 'prop-types';

	function MenuLinks(props) {
		const { assignActiveClass } = props

		const links = props.linkList.map((link) => 
			<Link
				to={{
						pathname: `${link.path}`,
						// stuff from docs below
						// search: "?sort=name",
						// hash: "#the-hash",
						// state: { fromDashboard: true }
					}}
				className='navbar__link'
				onClick={() => assignActiveClass(link.routeName)} 				
				key={link.id}
				id={link.routeName} 
				data-cy={`navbar__link--${link.routeName}`}
			> 
			<li>
					{link.name} 
			</li>
			</Link>
			)

			
		return (
			<ul className="navbar__links" data-cy='navbar__links'>
				{links}
			</ul>
		);
	}

	MenuLinks.propTypes = {
		linkList: PropTypes.array,
		assignActiveClass: PropTypes.func, 
		activeView: PropTypes.string
	}

	export default MenuLinks;