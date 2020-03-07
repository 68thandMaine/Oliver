import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavLinks(props) {

  return (
    <ul className="navbar--horizontal navbar__link u-mt3  u-ml8 u-pt1">
      <li className="navbar__link u-pl4 text-2xl">Home</li>
      <li className="navbar__link u-pl4 text-2xl">Account Info</li>
      <li className="navbar__link u-pl4 text-2xl">Goals</li>
      <li className="navbar__link u-pl4 text-2xl">Settings</li>
    </ul>
  );
}



export default NavLinks;