	import React from 'react';
	import { NavLink } from "react-router-dom";

	import PropTypes from 'prop-types';

	function MenuLinks(props) {
		const { assignActiveClass } = props

		const links = props.linkList.map((link) => 
			 <NavLink
				exact to={link.path}
				activeClassName="navbar__link--active"
				key={link.id}
				className="navbar__link"
				id={link.routeName} 
				data-cy={`navbar__link--${link.routeName}`}
				>
					<li>
						{link.name}
					</li>
				</NavLink>
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