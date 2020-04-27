import React from 'react';
import PropTypes from 'prop-types';

function NavLinks(props) {
  const { assignActiveClass } = props
  const links = props.linkList.map((link) => <li key={link.id} id={link.name} onClick={() => assignActiveClass(link.name)} className='navbar__link text-lg'>{link.name}</li>)

  return (
    <ul className="navbar--horizontal navbar__links">
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