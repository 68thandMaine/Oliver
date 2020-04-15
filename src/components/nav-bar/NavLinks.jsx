import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function NavLinks(props) {
  useEffect(() => {
    // if(document.querySelector('.active')) { document.querySelector('.active').classList.remove('active') }
    document.getElementById(props.activeLink).classList.add('active')
  });
  const { assignActiveClass } = props
  const links = props.linkList.map((link) => <li key={link.id} id={link.name} className='navbar__link text-lg u-pr2'>{link.name}</li>)

  return (
    <ul className="navbar--horizontal navbar--links navbar--center u-ml7">
      {links}
    </ul>
  );
}

NavLinks.propTypes = {
  linkList: PropTypes.array,
  activeLink: PropTypes.string,
  assignActiveClass: PropTypes.func.isRequired,
}

export default NavLinks;