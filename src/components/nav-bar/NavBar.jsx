import React, { useState, useEffect } from 'react';
import initialState from '../../constants/index';
import NavSearch from './NavSearch';
import NavLinks from './NavLinks';
const linkList = initialState.initialState.NavOptions;
const activeClass = 'navbar__link--active';

function NavBar(props) {

  const defaultConfig = {
    activeLinkName: 'Home',
    searchString: '',
  };

  const [navConfig, setNavConfig] = useState(defaultConfig);
  
  useEffect(() => {
    setActiveLink(navConfig.activeLinkName);
  });

  function setActiveLink(linkName) {
    // When the page loads we set the active link by matching the route to the linkId
    removeActiveLink();
    document.getElementById(linkName).classList.add('navbar__link--active')
    // remove any instance of navbar__link-active present from the array
  }

  function removeActiveLink() {
    const activeLink = document.querySelector(`.${activeClass}`);
    activeLink ? activeLink.classList.remove(activeClass) : console.log('false');
  }

  function searchString(query) {

  }


  return (
    <nav className="flex flex-row items-center justify-between xs:px-5 sm:px-10 lg:px-40 ">
      <NavSearch />
      <NavLinks 
        linkList={linkList} 
        assignActiveClass={setActiveLink}
      />
    </nav>
  )
}


export default NavBar;