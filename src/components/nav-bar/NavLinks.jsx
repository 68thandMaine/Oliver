import React from 'react';
import PropTypes from 'prop-types';

function NavLinks(props) {
  const { assignActiveClass } = props

  const links = props.linkList.map((link) => 
    <li 
      className='navbar__link'
      onClick={() => assignActiveClass(link.name)} 
      key={link.id} 
      id={link.name} 
      data-cy='navbar__link'
    >
      {link.name} 
    </li>
    )

    
  return (
    <ul className="navbar__links" data-cy='navbar__links'>
      {links}
    </ul>
  );
}

NavLinks.propTypes = {
  linkList: PropTypes.array,
  assignActiveClass: PropTypes.func,
  activeView: PropTypes.string
}

export default NavLinks;