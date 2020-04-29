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
    <nav className="flex flex-row items-center justify-between xs:px-5 sm:px-10 lg:px-40 ">
      <NavSearch />
      <NavLinks linkList={linkList} assignActiveClass={activeClass} activeView={navConfig.activeView}/>
    </nav>
  )
}


export default NavBar;