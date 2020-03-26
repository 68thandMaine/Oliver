import React, { useEffect, useState } from 'react';
import initialState from '../../constants/index';
import PropTypes from 'prop-types';
import NavSearch from './NavSearch';
import NavLinks from './NavLinks';
const linkList = initialState.initialState.NavOptions;

function NavBar(props) {

  const defaultConfig = {
    activeView: 'Home',
    searchString: '',
  };

  const [navConfig, setNavConfig] = useState(defaultConfig);

  function activeClass(id) {
    setNavConfig({
      'activeView' : id
    })
    console.log(navConfig)
  }

  function searchString(query) {

  }


  return (
    <nav className="navbar navbar--center testing-border">
      <NavSearch />
      <NavLinks linkList={linkList} assignActiveClass={activeClass} activeView={navConfig.activeView}/>
    </nav>
  )
}

NavBar.propTypes = {
  
}

export default NavBar;