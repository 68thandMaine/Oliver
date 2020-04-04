import React, { useState } from 'react';
import initialState from '../../constants/index';
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
    <nav className="navbar navbar--center u-pl5 u-pr5 u-ml5 u-mr5">
      <NavSearch />
      <h1>||</h1>
      <NavLinks linkList={linkList} assignActiveClass={activeClass} activeView={navConfig.activeView}/>
    </nav>
  )
}


export default NavBar;