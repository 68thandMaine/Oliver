import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavLinks(props) {

  return (
    <ul className="navbar--horizontal navbar__link u-mt3  u-ml8 u-pt1">
      <li className="navbar__link u-pl4">Home</li>
      <li className="navbar__link u-pl4">Account Info</li>
      <li className="navbar__link u-pl4">Goals</li>
      <li className="navbar__link u-pl4">Settings</li>
    </ul>
  );
}

export default NavLinks;