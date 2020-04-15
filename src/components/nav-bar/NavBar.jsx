import React, { useState } from 'react';
import initialState from '../../constants/index';
import NavSearch from './NavSearch';
import NavLinks from './NavLinks';
const linkList = initialState.initialState.NavOptions;

function NavBar(props) {
  const defaultConfig = {
    activeLink: 'Home',
    searchString: '',
  };
  
  const [navConfig, setNavConfig] = useState(defaultConfig);

  function setActiveClass(name) {
    setNavConfig({
      'activeLink' : name
    });
  }

  function searchString(query) {

  }


  return (
    <nav className="navbar navbar--center u-pl5 u-pr5 u-ml5 u-mr5">
      <NavSearch />
      <NavLinks 
        linkList={linkList} 
        activeLink={navConfig.activeLink}
        assignActiveClass={setActiveClass}
        />
    </nav>
  )
}


export default NavBar;