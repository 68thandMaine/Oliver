import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavLinks(props) {

  return (
    <ul className="navbar--horizontal navbar__link  u-ml8">
      <li className="navbar__link u-pl5 u-pt3 text-lg">Home</li>
      <li className="navbar__link u-pl5 u-pt3 text-lg">Account Info</li>
      <li className="navbar__link u-pl5 u-pt3 text-lg">Goals</li>
      <li className="navbar__link u-pl5 u-pt3 text-lg">Settings</li>
    </ul>
  );
}



export default NavLinks;