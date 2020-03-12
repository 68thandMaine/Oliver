import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import NavSearch from './NavSearch';
import NavLinks from './NavLinks';

function NavBar(props) {

  function changeActiveClass(icon, label) {
    
    if (icon.className.baseVal.includes('icon--active')) {
      return null;
    } else {
      const activeIcon = document.getElementsByClassName('icon--active');
      const newLabel = document.getElementById(`${label}Label`);
      
      document.getElementsByClassName(`active`)[0].className='hidden';
      newLabel.classList.remove('hidden')
      newLabel.classList.add('active');

      activeIcon[0].classList.remove('icon--active');
      icon.classList.add('icon--active')
    }
  }

  function changeView(view) {
    
  }
  
  return (
    <nav className="navbar navbar--center testing-border">
      <NavSearch />
      <NavLinks />
    </nav>
  )
}

NavBar.propTypes = {
  handleSetActiveView: PropTypes.func.isRequired,
}

export default NavBar;